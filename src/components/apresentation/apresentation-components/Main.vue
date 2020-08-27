<template>
  <main id="app">
    <section id="box-one" class="box-one">
      <div class="box-text">
        
      </div>
    </section>
    <section id="box-two" class="box-two">
      <div class="box-text-sobre">
        <div class="box-title-sobre">
          <h2 class="title-sobre">Sobre</h2>
        </div>
        <div class="box-content-sobre">
          <p class="content-sobre">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
             facilisis consequat feugiat. Suspendisse iaculis 
             nisi eu elit scelerisque, vel fermentum lectus condimentum. 
             Quisque tempus placerat nisl quis dapibus. Aliquam erat volutpat. 
             Praesent vehicula leo ut nibh porta, in vehicula diam porttitor. 
             Vestibulum eget facilisis odio. Nunc congue gravida elit a faucibus. 
             Phasellus eget pharetra velit. Mauris ac rutrum velit. Vestibulum ut ex 
             accumsan, vehicula dui ac, varius lectus. Phasellus nec varius lorem. 
             Donec nibh urna, auctor ac lorem eu, pulvinar pellentesque dolor.
          </p>
        </div>
      </div>
      <div  class="box-img-sobre">
        <img v-scrollanimation class="img-sobre" src="../../../imagens/pageTwoImg/img-sala.jpg" 
        alt="imagem sala de aula" data-anime="front">
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  directives: {
    
  }
  
}
</script>

<style>

</style>