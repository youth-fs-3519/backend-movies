
type Pessoa = {
    name: string;
    age?: number;
    email: string;
}

interface Veiculo {
    acelerar: () => void;
    freiar: () => void;
}

interface Carro extends Veiculo {
    cor: string;
}

const carro1: Carro = {

}
