<template>
    <div>
        <h1>Product Page {{ id }} </h1>
        <p>Product page content</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>