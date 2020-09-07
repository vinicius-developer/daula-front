<template>
  <header>
    <div class="box-button-logo">
        <img id="#box-one" v-on:click="softScroll($event)" class="logo-daula" 
        src="@/imagens/logo/daulaLogo2.svg" alt="logo daula">
    </div>
    <PcNav/>
    <SmartphoneNav />
  </header>
</template>

<script>
import '@/style/main.css'

import SmartphoneNav from './components/SmartphoneNav.vue'
import PcNav from './components/PcNav.vue'

export default {
  name: 'Header',
  components: {
    SmartphoneNav,
    PcNav
  },
  methods: {
    softScroll(event) {
      const element = event.target;
      const id = element.getAttribute('id');
      const section = document.querySelector(id).offsetTop;
      const header = document.querySelector("header").clientHeight;
      if('scrollBehavior' in document.documentElement.style) {
          window.scroll({
          top: section - header,
          behavior: "smooth"
        });
      } else {
           window.scroll(0, section - header);
      }
    },
    rotateBoxLogin() {
      const element = document.querySelector('div.rotate')
      if(element.classList.contains("change")) {
        element.classList.remove("change")
      }
    },
    rotateBoxRegister() {
       const element = document.querySelector('div.rotate')
      if(!element.classList.contains("change")) {
        element.classList.add("change")
      } 
    },
  }
}
</script>