import * as types from './mutation-types'

export const actions = {
  addToCart: ({ commit }, product) => {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  },
  removeFromCart: ({ state, commit }, product) => {
    const cartProduct = state.cart.added.find(p => p.id === product.id);
    if (cartProduct && cartProduct.quantity > 0) {
      commit(types.REMOVE_FROM_CART, {
        id: product.id
      })
    }
  }
}
