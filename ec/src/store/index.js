import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    elegido: "",
  },
  mutations: {
    OBT_PRODUCTOS(state, productos) {
      productos.map(producto => producto.cantidad = 1)
      state.productos = productos;
    },
    ING_CARRITO(state, elegido) {
      elegido.subtotal = elegido.precio * elegido.cantidad
      state.carrito.push(elegido);
      console.log(state.carrito);
    },
    AUMENTAR(state, id) {
      let aumentado = state.productos.filter(producto => producto.idDrink == id)
      console.log(aumentado)

      state.productos.map(producto => {
        if (producto.idDrink == id) {
          return producto.cantidad = aumentado[0].cantidad + 1
        } else {
          return producto
        }
      })
    },
    DISMINUIR(state, id) {
      let disminuido = state.productos.filter(producto => producto.idDrink == id)
      state.productos.map(producto => {
        if (producto.idDrink == id && producto.cantidad >=2) {
          return producto.cantidad = disminuido[0].cantidad - 1
        } else {
          return producto
        }
      })
    }
  },
  actions: {
    obtProductos({
      commit
    }) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((data) => {
          let productos = data.data.drinks;
          console.log(productos);
          commit("OBT_PRODUCTOS", productos);
        });
    },
    ingCarrito({
      commit
    }, elegido) {
      commit("ING_CARRITO", elegido);
    },
  },
  getters: {
    total(state) {
      let suma = 0
      state.carrito.forEach(
        producto => suma += producto.subtotal
      )
      return suma
    }
  },
  modules: {},
});