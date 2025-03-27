class Pessoa{
    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

let pessoa1 = new Pessoa('John', 'Rev', 36, '123.456.789-10')
console.log(pessoa1)

let pessoa2 = new Pessoa('Enzo', 'Cassol', 2, '367.352.593-23')
console.log(pessoa2)

class Aluno extends Pessoa {
    constructor(nome, sobrenome, idade, cpf, turma){
        super(nome, sobrenome, idade, cpf)
        this.turma = turma
    }

}

let aluno = new Aluno('Diego', 'Roberto', 123, 'cpf', '3C')
console.log(aluno)