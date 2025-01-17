
<template>
    <div>
        <h1>About Page</h1>
        <p>{{ data.message }}</p>
    </div>
</template>

<script setup>
    const { data } =await useFetch('/api/azer?name=azer', {
        method: 'POST',
        body: JSON.stringify({ age: 30 })
    });
</script>
<style scoped>

</style>