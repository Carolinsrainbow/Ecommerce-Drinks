<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto,index) in carrito" :key="index">
          <td>{{producto.id}}</td>
          <td>{{producto.nombre}}</td>
          <td>{{producto.cantidad}}</td>
          <td>{{producto.precio}}</td>
          <td>{{producto.subtotal}}</td>
        </tr>
      </tbody>
    </table>
    <h3>Total: $ {{total}} CLP. </h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Resumen",
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["total"]),
  },
};
</script>
