Vue.component('padre', {
    template:
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{datoPadre}}</h2>
        <button class="bg-danger" @click="datoPadre++">+</button>
        <h1>Nombre Padre: {{nombrePadre}}</h1>
        <hijo :numero="datoPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data(){
        return{
            datoPadre: 10,
            nombrePadre: ''
        }
    }
})