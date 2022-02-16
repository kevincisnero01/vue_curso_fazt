<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">User</router-link>
        </li>
        <li>
          <router-link to="/test">Test</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  data () {
    return {
    }
  },
  components:{
    User
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
