console.log(Vue)

const app = Vue.createApp({
    template: `
    <h2>HOLA MUNDO</h2>
    {{1+1}}  
    ` //backticks (las comillas)
})


app.mount('#myApp')