<template>
  <div id="app">
    <h1>Clase 5</h1>
    <fieldset class="car">
      <legend>Propiedad Computada: computed()</legend>
      <p>{{ fullName }}</p>
    </fieldset>
    <test msg="Msj para Componente Padre a hijo"></test>
    <hr>
      <User/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import User from './components/User.vue'

export default {
  data () {
    return {
      user: {
        firstName: 'Kevin',
        lastName: 'Cisnero'
      }
    }
  },
  components:{
    Test,
    User
  },
  computed: {
    fullName: function(){
      return this.user.firstName + ' ' + this.user.lastName
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
