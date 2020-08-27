<template>
  <div id="app">
    <Header/>
    <Main />
  </div>
</template>

<script>
import './style/main.css'

//import HelloWorld from './components/HelloWorld.vue'

import Header from './components/apresentation/apresentation-header/Header'
import Main from './components/apresentation/apresentation-components/Main'


export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  
}
</script>

<style>

#app {
    width: 99vw;
    height: 500vh;
    background-color: #007580;
} 

</style>
