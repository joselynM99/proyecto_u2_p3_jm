const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

const frases = [{ texto: 'De tal palo tal astilla', autor: 'Fernando M' },
{ texto: 'De tal palo tal astilla2', autor: 'Fernando M2' },
{ texto: 'De tal palo tal astilla3', autor: 'Fernando M3' },
{ texto: 'De tal palo tal astilla4', autor: 'Fernando M4' },
{ texto: 'De tal palo tal astilla5', autor: 'Fernando M5' },
{ texto: 'De tal palo tal astilla6', autor: 'Fernando M6' },
{ texto: 'De tal palo tal astilla7', autor: 'Fernando M7' },
{ texto: 'De tal palo tal astilla8', autor: 'Fernando M9' }]
console.log(frases)
const app = Vue.createApp({
    data() {
        return {
            arreglo: frases,
            fraseNueva: null

        }
    },

    methods: {
        agregarFrase({charCode}) {
            console.log('Mensaje')
            console.log(charCode)

            if (charCode !== 13) return
            const fraseObjNueva = {
                texto: this.fraseNueva,
                autor: 'Joselyn'
            }
            this.arreglo.unshift(fraseObjNueva)
        },

        agregarFraseModificador(event) {
            console.log('Mensaje')
            console.log(event.charCode)          
            const fraseObjNueva = {
                texto: this.fraseNueva,
               // autor: 'Joselyn'
            }
            this.arreglo.unshift(fraseObjNueva)
        }
    }
})
app.mount('#myApp2')