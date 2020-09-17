<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto,index) in carrito" :key="index">
          <td>{{producto.id}}</td>
          <td>{{producto.nombre}}</td>
          <td>{{producto.cantidad}}</td>
          <td>{{producto.precio}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Resumen",
  computed: {
    ...mapState(["carrito"]),
  },
};
</script>
