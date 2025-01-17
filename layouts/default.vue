<template>
    <header class="shadow-md bg-white">
        <nav class="container mx-auto p-4 flex justify-between items-center">
            <NuxtLink class="font-bold" to="/">Nuxt Azer</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink class="" to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="btn" to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>