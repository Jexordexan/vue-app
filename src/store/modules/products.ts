import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  byId: {}
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
    products.forEach(p => state.byId[p.id] = p)
  },

  [types.REMOVE_FROM_CART] (state, { id }) {
    state.byId[id].inventory++
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.byId[id].inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
