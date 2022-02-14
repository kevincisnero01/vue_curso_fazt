<template>
  <div id="app">
    <h1>Clase 5</h1>
    <fieldset class="car">
      <legend>Evento: v-on:click="saludar()"</legend>
      <button type="button" v-on:click="saludar">Click Me </button>
    </fieldset>

    <fieldset class="car">
      <legend>Evento: v-on:click="saludar(parametro)"</legend>
      <button type="button" v-on:click="saludar2(user.lastName)">Click Me</button>
    </fieldset>

    <fieldset class="car">
      <legend>Evento: v-model & v-on:click="saludar()"</legend>
      <input type="text" v-model="user.firstName">
      <button type="button" v-on:click="saludar2(user.firstName)">Click Me</button>
    </fieldset>

    <fieldset class="car">
      <legend>Evento: v-on:keyup="typing" </legend>
      <input type="text" v-on:keyup="typing">
    </fieldset>

    <fieldset class="car">
      <legend>Evento: v-on:keyup.enter="typedEnter"</legend>
      <input type="text" v-on:keyup.enter="typedEnter">
    </fieldset>

  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        firstName: 'Kevin',
        lastName: 'Cisnero'
      }
    }
  },
  methods: {
    saludar: function(){
      alert('Hola ' + this.user.firstName)
    },
    saludar2: function(name){
      alert('Hola ' + name)
    },
    typing: function(e){
      console.log(e.target.value)
    },
    typedEnter: function(e){
      console.log('Se persiono Enter')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  border:1px solid #d2d2d2;
  border-radius: 5px;
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

.car{
  display: inline-block;
  padding: 10px;
  width: 30%;
}
</style>
