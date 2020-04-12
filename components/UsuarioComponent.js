Vue.component('usuario', {
    template:
    `
    <div>
        <h1>Usuario</h1>
        <p>{{nombre}}</p>
        <p>{{apellido}}</p>
        <p>{{edad}}</p>
    </div>
    `,
    data(){
        return{
            nombre: 'Sebastian',
            apellido: 'Armijos',
            edad: 20
        }
    } 
})