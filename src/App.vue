<template>
  <div id="app">
    <MainText/>
    <technical-prof/>
    <p>{{name}}</p>
  </div>
</template>

<script>
import MainText from './components/MainText.vue'
import TechnicalProf from './components/TechnicalProf.vue'

export default {
  name: 'app',
  data(){
    return{
      name: 'trento'
    }
  },
  components: {
    MainText,
    TechnicalProf
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
</style>
