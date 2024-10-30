<template>
    <div class="style-00">
        <RouterLink to="/" class="style-01">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
            <h1>S<span>a</span>l<span>o</span>o<span>n</span></h1>
        </RouterLink>
        <nav class="style-02">
            <RouterLink active-class="active-route" to="/">Home</RouterLink>
            <RouterLink active-class="active-route" to="/about">About</RouterLink>
        </nav>
        <div class="style-03">
            <button class="model violet">En</button>
            <button class="model violet">Sign In</button>
            <button class="model violet">Sign Up</button>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.style-00 {
    @apply border flex justify-between items-center px-6
}

.style-01 {
    @apply flex items-end gap-2 py-2
}

.style-02 {
    @apply flex justify-center items-center gap-2 w-2/4 font-semibold capitalize;
    @apply text-violet-400;
}

.style-03 {
    @apply flex justify-end items-center gap-2 w-1/4
}

button.model {
    @apply border px-6 py-2 rounded-2xl font-semibold capitalize text-sm
}

button.violet {
    @apply border-violet-400 text-violet-600 bg-white;
    @apply hover:border-violet-800 hover:text-violet-200 hover:bg-violet-500;
}

.logo {
    @apply size-10
}

.active-route {
    @apply underline underline-offset-4;
    @apply text-violet-600;
}

h1 {
    @apply font-abril-fatface-regular text-4xl;
    @apply text-violet-900;
}

span {
    @apply text-violet-500;
}
</style>