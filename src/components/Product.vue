<template>
  <li>
    <span class="title">
      {{ product.title }}
    </span>
    <span class="price">
      {{ product.price | currency }}
    </span>
    <div class="inventory">
       {{ product.inventory }} left in stock
    </div>
    <button
      :disabled="!quantityInCart(product.id)"
      @click="removeFromCart(product)">
      -
    </button>
    {{ quantityInCart(product.id) }} in cart
    <button
      :disabled="!product.inventory"
      @click="addToCart(product)">
      +
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

interface IProduct {
  name: string,
  id: number,
  inventory: number
}

@Component({
  props: ['product'],
  computed: mapGetters(['quantityInCart']),
  methods: mapActions([
    'addToCart',
    'removeFromCart'
  ])
})
export default class Product extends Vue { }
</script>

<style scoped>
  li {
    font-size: 14px;
  }
</style>
