export const getters = {
	cartProducts: state => {
    return state.cart.added.map(({ id, quantity }) => {
      const product = state.products.byId[id];
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  quantityInCart: (state) => (productId) => {
    const cartEntry = state.cart.added.find(p => p.id === productId) || {};
    return cartEntry.quantity || 0;
  }
}
