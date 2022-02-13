<template>
  <div id="app">
    <h1 v-text="msg"></h1>
    <img src="./assets/logo.png">
    <hr>
    <div v-html="contentHTML"></div>
    <h2 v-html="bucleTitle"></h2>
    <ul>
      <li v-for="skill in skills"> {{ skill.name }}</li>
    </ul>
    <p v-if="msgShow">Contenido Visible(v-if)</p>

    <p v-if="!msgHidden">Contenido Oculto (v-else)</p>

    <test></test>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  components:{
    Test
  },
  data () {
    return {
      msg: 'Bienvenidos a tu Vue.js App (v-text)',
      contentHTML: '<h2>HTML(v-html)</h2>',
      bucleTitle: 'Lista de Habilidades(v-for)',
      msgShow: true,
      msgHidden: false,
      skills: [
      { name:'Lectura'},
      { name:'Ejercicio'},
      { name:'Caminar'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
