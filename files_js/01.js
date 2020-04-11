//Estamos llamando a vue para trabajar con este mismo
const app = new Vue({
    el: '#app', //el y data son propios de vue  
    data: {
        titulo: 'Hola Mundo con vue',
        nombre: 'Sebastian',
        apellido: 'Armijos',
        edad: 20,
        hobbies: ['guitarra', 'futbol', 'programacion'],
        frutas: [
            {nombre: 'manzana', cantidad:10},
            {nombre: 'pera', cantidad:0},
            {nombre: 'platano', cantidad:50}
        ],
        nuevaFruta: '',
        nuevaCantidad: '',
        total: 0,
    },
    //Vue tiene methods como palabra reservada para poner metodos
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: this.nuevaCantidad 
            });
            this.nuevaFruta = '';
            this.nuevaCantidad = '';
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})