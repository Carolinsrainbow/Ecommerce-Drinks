<template>
  <div class="home">
    <!-- Inicio del Navbar -->
    <Navbar></Navbar>
    <!-- Fin del Navbar -->

    <h1>Bienvenidos</h1>
    <h2>Nuestros Productos</h2>
<!-- Inicio del Card -->
<div class="container">
  <div class="row">
    <div clas="col-4">
       <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
    </div>
  </div>
</div>
<!-- Fin del Card -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Navbar
  }

}
</script>
