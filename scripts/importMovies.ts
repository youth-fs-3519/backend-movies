import axios from 'axios';
import * as dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma';

dotenv.config();
const prisma = new PrismaClient();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const MAX_PAGES = 500; // Limite da API de discover

async function fetchGenres() {
  const response = await axios.get(`${TMDB_API_URL}/genre/movie/list`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'pt-BR',
    }
  });

  const genres = response.data.genres;

  for (const genre of genres) {
    await prisma.movieGenre.upsert({
      where: { tmdbId: genre.id },
      update: { name: genre.name },
      create: { tmdbId: genre.id, name: genre.name }
    });
  }

  console.log('Gêneros salvos com sucesso!');
}

async function importMovies() {
  for (let page = 1; page <= MAX_PAGES; page++) {
    try {
      const response = await axios.get(`${TMDB_API_URL}/discover/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'pt-BR',
          sort_by: 'popularity.desc',
          page
        }
      });

      const movies = response.data.results;

      if (!movies || movies.length === 0) break;

      for (const movie of movies) {
        const posterUrl = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null;

        // Verifica se o filme já existe
        const existing = await prisma.movie.findUnique({ where: { tmdbId: movie.id } });
        if (existing) continue;

        const createdMovie = await prisma.movie.create({
          data: {
            tmdbId: movie.id,
            name: movie.title,
            sinopsis: movie.overview,
            releaseDate: movie.release_date ? new Date(movie.release_date) : null,
            posterUrl,
            adult: movie.adult,
          },
        });

        // Associar gêneros
        if (movie.genre_ids && movie.genre_ids.length > 0) {
          await prisma.movie.update({
            where: { id: createdMovie.id },
            data: {
              genres: {
                connect: movie.genre_ids.map((id: string) => ({ tmdbId: id }))
              }
            }
          });
        }

        console.log(`Salvo: ${movie.title}`);
      }
    } catch (err: any) {
      console.error(`Erro na página ${page}:`, err.message);
      break; // Em caso de erro contínuo, para o loop
    }
  }

  await prisma.$disconnect();
  console.log('Importação finalizada!');
}

async function run() {
  await fetchGenres();
  await importMovies();
}

run();
