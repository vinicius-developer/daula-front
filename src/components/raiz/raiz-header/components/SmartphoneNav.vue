<template>
    <fragment>
        <div class="box-smartphone-menu">
            <button class="button-menu" v-on:click="showMenu($event)">
              <img src="@/imagens/header-smartphone/menu.svg" alt="">
            </button>
        </div>
        <div class="model-smartphone disappear">
          <div class="box-header-buttons">
            <div class="header-buttons">
                <button id="#box-two" v-on:click="softScroll($event), showMenu()">Sobre</button>
            </div>
            <div class="header-buttons">
                <button id="#box-three" v-on:click="softScroll($event), showMenu()">Aulas</button>
            </div>
            <div class="header-buttons">
                <button id="#box-four" v-on:click="softScroll($event), showMenu()">Doações</button>
            </div>
            <div class="header-buttons">
                <button id="#box-five"  v-on:click="softScroll($event), showMenu()">Principios</button>
            </div>
            <div class="box-buttons-register"> 
              <div class="buttons-register-one">
                <button id="#box-one" v-on:click="rotateBoxLogin(), softScroll($event), showMenu()">Entrar</button>
              </div>
              <div class="buttons-register-two">
                <button id="#box-one" v-on:click="rotateBoxRegister(), softScroll($event), showMenu()">Registrar</button>
              </div>
            </div>
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
        showMenu() {
          const element = document.querySelector('div.model-smartphone')
          if(element.classList.contains('disappear')) {
            element.classList.remove('disappear')
          } else {
            element.classList.add('disappear')
          }
        }
    }

}


</script>