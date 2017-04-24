<template>
  <ul>
    <product v-for="p in products"  :product="p" :key="p.id"></product>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { mapGetters } from 'vuex'
import Product from './Product'

@Component({
  components: {
    Product
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
})
export default class ProductList extends Vue{
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
