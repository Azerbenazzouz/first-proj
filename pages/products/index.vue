<template>
    <div>
        <h1>Products Page</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id" class="bg-white p-5 shadow rounded-lg">
                <NuxtLink :to="`/products/${product.id}`" class="text-lg font-semibold">{{ product.title }}</NuxtLink>
                <p class="text-gray-500">{{ product.description }}</p>
                <p class="text-blue-500 font-semibold">${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
    })

    // Fetch products
    const { data : products } =await useFetch('https:fakestoreapi.com/products');
    console.log(products);
</script>

<style scoped>

</style>