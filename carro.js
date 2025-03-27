class Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros) {
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.velocidade = velocidade;
        this.passageiros = passageiros;
    }
    acelerar (s) {
        this.velocidade += s
        console.log('VRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    }
    desacelerar (s) {
        this.velocidade -= s
        console.log('ERRRRRRRRRRRRRRRRRRRRRRRRR')
    }

}

class Barco extends Veiculo {
    constructor(material, tipo, marca, cor, velocidade, passageiros){
    super(tipo, marca, cor, velocidade, passageiros)
        this.material = material,
        this.tipo = tipo,
        this.marca = marca,
        this.cor = cor,
        this.velocidade = velocidade,
        this.passageiros = passageiros
    }

    apresentar (){
        console.log(`O Barco de tipo ${this.tipo} de marca ${this.marca} com a cor ${this.cor} e material ${this.material} esta a ${this.velocidade} kt, com ${this.passageiros} passageiros.`)
    }
}

class Carro extends Veiculo {
    constructor(data, tipo, marca, cor, velocidade, passageiros){
    super(tipo, marca, cor, velocidade, passageiros)
        this.data = data,
        this.tipo = tipo,
        this.marca = marca,
        this.cor = cor,
        this.velocidade = velocidade,
        this.passageiros = passageiros
    }

    apresentar (){
        console.log(`O Carro de tipo ${this.tipo} de marca ${this.marca} com a cor ${this.cor} e data ${this.data} esta a ${this.velocidade} km/h, com ${this.passageiros} passageiros.`)
    }
}

class Avião extends Veiculo {
    constructor(acidentes, tipo, marca, cor, velocidade, passageiros){
    super(tipo, marca, cor, velocidade, passageiros)
        this.acidentes = acidentes,
        this.tipo = tipo,
        this.marca = marca,
        this.cor = cor,
        this.velocidade = velocidade,
        this.passageiros = passageiros
    }

    apresentar (){
        console.log(`O Avião de tipo ${this.tipo} de marca ${this.marca} com a cor ${this.cor} e número de acidentes ${this.acidentes} esta a ${this.velocidade} km/h, com ${this.passageiros} passageiros.`)
    }
}

    let Veículo1 = new Carro('24/06/2005', 'Andante', 'BMW', 'Azul', 72, 2);
    let Veículo2 = new Barco('Metal e Vidro', 'Lancha', 'Yamaha', 'Vermelho e Amarelo', 56, 6);
    let Veículo3 = new Avião('03','Viagem', 'Boeing', 'Branco e Azul', 760, 120);

    Veículo1.apresentar();
    Veículo1.acelerar(2);
    Veículo1.desacelerar(1);
    Veículo1.apresentar();

    Veículo2.apresentar();
    Veículo2.acelerar(2);
    Veículo2.desacelerar(1);
    Veículo2.apresentar();

    Veículo3.apresentar();
    Veículo3.acelerar(2);
    Veículo3.desacelerar(1);
    Veículo3.apresentar();