<template>
    <fragment>
      <nav class="box-header-buttons  box-pc-menu">
        <div class="header-buttons">
            <button id="#box-two" v-on:click="softScroll($event)">Sobre</button>
        </div>
        <div class="header-buttons">
            <button id="#box-three" v-on:click="softScroll($event)">Aulas</button>
        </div>
        <div class="header-buttons">
            <button id="#box-four" v-on:click="softScroll($event)">Doações</button>
        </div>
        <div class="header-buttons">
            <button id="#box-five"  v-on:click="softScroll($event)">Principios</button>
        </div>
      </nav>
      <div class="box-buttons-register box-pc-menu">
        <div class="buttons-register-one">
          <button id="#box-one" v-on:click="rotateBoxLogin(), softScroll($event)">Entrar</button>
        </div>
        <div class="buttons-register-two">
          <button id="#box-one" v-on:click="rotateBoxRegister(), softScroll($event)">Registrar</button>
        </div>
      </div>
    </fragment>
</template>

<script>
import '@/style/main.css'

import {Fragment} from 'vue-fragment'

export default {
    name:'SmartphoneNav',
    components: {
        Fragment
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