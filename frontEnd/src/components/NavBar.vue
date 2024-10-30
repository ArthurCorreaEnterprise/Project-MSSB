<template>
  <div class="navbar-container">
    <RouterLink to="/" class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <h1>S<span>a</span>l<span>o</span>o<span>n</span></h1>
    </RouterLink>
    <nav class="nav-links">
      <RouterLink active-class="active-route" to="/">Home</RouterLink>
      <RouterLink active-class="active-route" to="/services"
        >Services</RouterLink
      >
      <RouterLink active-class="active-route" to="/about-us"
        >About Us</RouterLink
      >
      <RouterLink active-class="active-route" to="/to-schedule"
        >To Schedule</RouterLink
      >
      <RouterLink active-class="active-route" to="/location"
        >Location</RouterLink
      >
      <RouterLink active-class="active-route" to="/blog">Blog</RouterLink>
    </nav>
    <div class="button-container">
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
.navbar-container {
  @apply flex justify-between items-center px-6;
}

.logo-container {
  @apply flex items-end gap-2 py-2;
}

.nav-links {
  @apply flex justify-center items-center gap-4 w-2/4 font-semibold capitalize;
  @apply text-violet-400;
}

.button-container {
  @apply flex justify-end items-center gap-2;
}

button.model {
  @apply border px-6 py-2 rounded-md font-bold capitalize text-sm;
}

button.violet {
  @apply border-violet-400 text-violet-600 bg-white;
  @apply hover:border-violet-800 hover:text-violet-200 hover:bg-violet-500;
}

.logo {
  @apply size-10;
}

.active-route {
  @apply text-violet-800;
}

h1 {
  @apply font-abril-fatface-regular text-4xl;
  @apply text-violet-900;
}

span {
  @apply text-violet-500;
}
</style>
