const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

const estudiantes = [{nombre: "Joselyn", apellido: "Moncayo", direccion: "Sur de Quito"},
{nombre: "Juan", apellido: "Perez", direccion: "Norte de Quito"},
{nombre: "Jimena", apellido: "Suarez", direccion: "Centro de Quito"},
{nombre: "Jorge", apellido: "Mendez", direccion: "Sur de Quito"},
{nombre: "Teresa", apellido: "Cando", direccion: "Sur de Quito"},
{nombre: "Jeronimo", apellido: "Garcia", direccion: "Norte de Quito"},]
console.log(estudiantes)
const app = Vue.createApp({
    data() {
        return {
            arreglo: estudiantes,
            estudianteNombre: null,
            estudianteApellido: null,
            estudianteDireccion: null

        }
    },

    methods: {

        agregarEstudiante(event) {
            console.log(event.charCode)          
            const estudianteOjtNuevo = {
                nombre: this.estudianteNombre,
                apellido: this.estudianteApellido,
                direccion: this.estudianteDireccion
               
            }
            this.arreglo.unshift(estudianteOjtNuevo)
        }
    }
})
app.mount('#myAppEstudiente')