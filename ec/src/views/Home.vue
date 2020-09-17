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
        <div clas="col-3" v-for="(producto, index) in productos" :key="index">
          <b-card
            :title="producto.strDrink"
            :img-src="producto.strDrinkThumb"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>$ {{ precioBase}} CL.</b-card-text>

            <b-button
              variant="outline-warning"
              @click="incorporar(producto.strDrink,producto.idDrink,precioBase,1)"
            >Comprar</b-button>
          </b-card>
        </div>
      </div>
    </div>
    <!-- Fin del Card -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapState } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      precioBase: "10.000",
    };
  },

  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["ingCarrito"]),
    incorporar(nombre, id, precio, cantidad) {
      this.ingCarrito({
        nombre,
        id,
        precio,
        cantidad,
      });
    },
  },
};
</script>
