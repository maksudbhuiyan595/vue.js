<script setup>
import HelloWorld from './components/HelloWorld.vue';


</script>

<template>
  <!-- variable pass -->
  <!-- <HelloWorld name="maksud"></HelloWorld> -->

<!-- solt  -->
<!-- <HelloWorld><h1>Hello solt</h1></HelloWorld> -->


<!-- name solt -->

<HelloWorld>
  <template v-slot:header>
      <h1> This is header</h1>
  </template>
  <template v-slot:main>
      <h1> This is Main</h1>
  </template>
  <template v-slot:footer>
      <h1> This is Footer</h1>
  </template>
</HelloWorld>
</template>

<style scoped>

</style>
