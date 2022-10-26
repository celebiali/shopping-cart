<template>
    <div>
        <h1>Your Cart</h1>
       <CardItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
       />
       <CartSummaryPaymentCard
       />
    </div>
</template>

<script>
import CardItemCard from "../components/cart/CardItemCard.vue"
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue"

export default {
    components: {
        CardItemCard,
        CartSummaryPaymentCard
    },
    computed: {
        products(){
            return this.$store.getters.cartItems
        }
    }
}
</script>
