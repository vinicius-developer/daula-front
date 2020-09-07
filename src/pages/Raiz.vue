<template>
  <fragment>
    <Header/>
    <Main />
    <Footer />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

import '@/style/main.css'

import Header from '@/components/raiz/raiz-header/Header'
import Main from '@/components/raiz/raiz-main/Main'
import Footer from '@/components/raiz/raiz-footer/Footer'

export default {
  name: 'App',
  components: {
    Fragment,
    Header,
    Main,
    Footer,
  },
}
</script>

<style>

#app {
  width: 100%;
}

</style>