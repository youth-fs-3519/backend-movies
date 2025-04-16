import { Router } from "express";
import { PrismaClient } from "../generated/prisma";

const movieRouter = Router();
const prisma = new PrismaClient();

movieRouter.get('/', async (req, res) => {
    const {
        page = 1,
        pageSize = 20
    } = req.query;

    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);

    if (Number.isNaN(pageNumber) || Number.isNaN(pageSizeNumber)) {
        res.status(400).send('Invalid page or pageSize parameter');
        return;
    }

    if (pageNumber <= 0 || pageSizeNumber <= 0) {
        res.status(400).send('Invalid page or pageSize parameter');
        return;
    }

    const results = await prisma.movie.findMany({
        take: pageSizeNumber,
        skip: (pageNumber - 1) * pageSizeNumber
    });

    res.json(results)
});

movieRouter.post('/', async (req, res) => {
    const {
        name,
        sinopsis,
        releaseDate,
        posterUrl,
        ageRestriction,
        genres,
    } = req.body;

    const convertedReleaseDate = new Date(releaseDate)

    const createdMovie = await prisma.movie.create({
        data: {
            name,
            sinopsis,
            releaseDate: convertedReleaseDate.toISOString(),
            posterUrl,
            ageRestriction,
            genres,
        }
    });

    res.json(createdMovie)
});

movieRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const {
        name,
        sinopsis,
        releaseDate,
        posterUrl,
        ageRestriction,
        genres,
    } = req.body;

    const convertedReleaseDate = new Date(releaseDate)

    const updatedMovie = await prisma.movie.update({
        data: {
            name,
            sinopsis,
            releaseDate: convertedReleaseDate.toISOString(),
            posterUrl,
            ageRestriction,
            genres,
        },
        where: {
            id
        }
    });

    res.json(updatedMovie)
})

export default movieRouter;
