import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: debug
})
