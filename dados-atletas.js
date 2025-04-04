const modeloDados = {
    nome: "Cesar Abascal",
    idade: 30,
    peso: 80,
    altura: 1.7,
    notas: [10, 9.34, 8.42, 10, 7.88]
}

const log = console.log

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria() {
        let idade = this.idade
        return (
            idade >= 9 && idade <= 11 ? "infantil" :
                idade >= 12 && idade <= 13 ? "Juvenil" :
                    idade >= 14 && idade <= 15 ? "Intermediário" :
                        idade >= 16 && idade <= 30 ? "Adulto" :
                            "Sem categoria"
        )
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        let notas = this.notas
        let notasComputadas = notas.sort((a, b) => a - b)
        notasComputadas.shift()
        notasComputadas.pop()
        return (notasComputadas.reduce((nota1, nota2) => nota1 + nota2) / notasComputadas.length)
    }

    obtemNomeAtleta() {
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso + "kg"
    }

    obtemAlturaAtleta(){
        return this.altura + 'm'
    }

    obtemNotasAtleta() {
        return this.notas.join(", ")
    }

    obtemCategoria() {
        return this.calculaCategoria()
    }

    obtemIMC() {
        return this.calculaIMC().toFixed(2)
    }

    obtemMediaValida() {
        return this.calculaMediaValida().toFixed(2)
    }

    logarDados() {
        log("---------- Dados do atleta ----------\n")
        log("Nome: ", this.obtemNomeAtleta())
        log("Idade: ", this.obtemIdadeAtleta())
        log("Peso: ", this.obtemPesoAtleta())
        log("Altura: ", this.obtemAlturaAtleta())
        log("Notas: ", this.obtemNotasAtleta())
        log("Categoria: ", this.obtemCategoria())
        log("IMC: ", this.obtemIMC())
        log("Média válida: ", this.obtemMediaValida())
    }
}

const att = new Atleta(modeloDados.nome, modeloDados.idade, modeloDados.peso, modeloDados.altura, modeloDados.notas)
att.logarDados()