<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
    })

    // Fetch products
    const { data : products } =await useFetch('https:fakestoreapi.com/products');

    useHead({
        title: 'Nuxt Azer | Products',
        meta: [
            {
                name: 'description',
                content: 'List of products'
            }
        ]
    })
</script>

<style scoped>
    
</style>