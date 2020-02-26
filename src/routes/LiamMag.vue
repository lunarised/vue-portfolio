<template>
<fragment>
  <MainText />
  <technical-prof />
  <p> Liam is a maggot </p>
  <p>{{name}}</p>
  </fragment>
</template>

<script>
import MainText from '../components/MainText.vue'
import TechnicalProf from '../components/TechnicalProf.vue'

export default {
  name: 'LiamMag',
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