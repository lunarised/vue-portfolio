<template>
<fragment>
  <MainText />
  <technical-prof />
  <p>{{name}}</p>
  </fragment>
</template>

<script>
import MainText from '../components/MainText.vue'
import TechnicalProf from '../components/TechnicalProf.vue'

export default {
  name: 'Home',
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