<template>
    <div>
        <div class="bg-white p-5 shadow rounded-lg">
            <h1 class="text-lg font-semibold">{{ product.title }}</h1>
            <p class="text-gray-500">{{ product.description }}</p>
            <p class="text-blue-500 font-semibold">${{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>

<style lang="scss" scoped>

</style>