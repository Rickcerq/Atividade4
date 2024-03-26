var aluno = {
    nome: "Henrique de Cerqueira",
    idade: 18,
    filiação: ["João", "Jessica"],
    endereço: {
        rua: "Rua 1",
        cidade: "João pessoa",
        estado: "Paraíba",
    },
    dadosCompleto: function() {
      if (!this.nome || !this.idade || !this.filiação || !this.endereço.rua || !this.endereço.cidade || !this.endereço.estado) {
        return false
      } 
      else {
        return true
      }
    },
}

var aluno2 = {
    nome: "",
    idade: 20,
    filiação: ["Marcio", "Juliana"],
    endereço: {
        rua: "Rua 2",
        cidade: "João pessoa",
        estado: "Paraiba",
    },
    dadosCompleto: function() {
      if (!this.nome || !this.idade || !this.filiação || !this.endereço.rua || !this.endereço.cidade || !this.endereço.estado) {
        return false
      } 
      else {
        return true
      }
    },
}

var dadosAluno = JSON.stringify(aluno)

var dadosAluno2 = JSON.stringify(aluno2)


alert(dadosAluno)
alert(dadosAluno2)

alert(aluno.dadosCompleto())
alert(aluno2.dadosCompleto())