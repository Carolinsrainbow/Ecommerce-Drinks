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
      state.productos = productos;
    },
    ING_CARRITO(state, elegido) {
      state.carrito.push(elegido);
      console.log(state.carrito);
    },
  },
  actions: {
    obtProductos({ commit }) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((data) => {
          let productos = data.data.drinks;
          console.log(productos);
          commit("OBT_PRODUCTOS", productos);
        });
    },
    ingCarrito({ commit }, elegido) {
      commit("ING_CARRITO", elegido);
    },
  },
  modules: {},
});
