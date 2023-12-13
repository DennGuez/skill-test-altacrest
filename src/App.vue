<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h3>Skill Test Altacrest</h3>
      <nav class="wrapper">
        <RouterLink :to="{ name: 'home' }">POSTS</RouterLink>
        <RouterLink :to="{ name: 'create-post' }">CREATE POST</RouterLink>
      </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
