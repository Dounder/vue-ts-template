<template>
  <main class="home">
    <h1>home</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-page',
})
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: $primary;
}
</style>
