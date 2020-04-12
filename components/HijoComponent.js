Vue.component('hijo', {
    template:
    `
    <div class="py-5 bg-success">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre Hijo: {{nombre}}</h4>
    </div>
    `, 
    props: ['numero'],
    data(){
        return{
            nombre: 'Sebastian'
        }
    },
    mounted(){
    //Pasar el dato al componente Padre
        this.$emit('nombreHijo', this.nombre)
    }
})