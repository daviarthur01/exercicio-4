const VerificarImpar = {
    data() {
        return {
            resultado: 0,
            Num1: "",
            tela: ""
        }
    },
    methods: {
        Verificar: function () {
            this.resultado = this.Num1 % 2

            if (this.Num1 == "") {
                alert("Preencha os campos")
            } else {
                if (this.resultado == 0) {
                    this.tela = "Par "
                } else {
                    this.tela = "Impar"
                }
            }
        }
    },
}

Vue.createApp(VerificarImpar).mount("#App")