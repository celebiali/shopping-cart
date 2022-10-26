<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      @close-product-drawer="closeProductDrawer()"
    />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        @view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";

export default {
  name: "HomeView",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    //Close Product Drawer
    closeProductDrawer(){
      this.active.product_drawer = false
    }
  },
};
</script>


<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button.view-product-button {
            padding: 10px;
            background-color: rgb(79, 160, 187);
            border: none;
            color: white;
            font-weight: bold;
            font-size: 1.15rem;
            border-radius: 5px;
            cursor: pointer;
        }
</style>