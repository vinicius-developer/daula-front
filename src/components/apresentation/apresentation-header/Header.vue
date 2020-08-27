<template>
  <header>
    <div class="box-button-logo">
        <img id="#box-one" v-on:click="softScroll($event)" class="logo-daula" 
        src="../../../imagens/logo/daulaLogo2.svg" alt="logo daula">
    </div>
    <nav class="box-header-buttons">
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
          <button id="#box-five" v-on:click="softScroll($event)">Valores</button>
      </div>
    </nav>
    <div class="box-buttons-register">
      <div class="buttons-register-one">
        <a href="">
          <button>Entrar</button>
        </a>
      </div>
      <div class="buttons-register-two">
        <a href="">
          <button>Registrar</button>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import '../../../style/main.css'

export default {
  name: 'Header',
  components: {
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
  }
}
</script>