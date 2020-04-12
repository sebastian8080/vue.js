Vue.component('saludo', {
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>akjdksajdl</h3>
    </div>
        `,
    data(){ //Tenemos el data en forma de funcion
        return {
            saludo: 'Hola desde Vue'
        }
    }
});
