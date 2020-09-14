import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: []
  },
  mutations: {
    OBT_PRODUCTOS(state, productos) {
      state.productos = productos
    }
  },
  actions: {
    obtProductos({
      commit
    }) {
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(data => {
        let productos = data.data.drinks
        console.log(productos)
        commit("OBT_PRODUCTOS", productos)

      })

    }
  },
  modules: {}
})