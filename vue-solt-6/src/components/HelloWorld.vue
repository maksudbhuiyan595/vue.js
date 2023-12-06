<script setup>

//variable define
// const props=defineProps(["name"])
</script>

<template>
  <!-- variable using -->
  <!-- <h1>{{ name }}</h1> -->


  <!-- solt -->
  <!-- <slot></slot>
  <slot></slot>
  <slot></slot>
 -->

<!--  name solt -->
<slot name="header"></slot>
<slot name="main"></slot>
<slot name="footer"></slot>

</template>

<style scoped>


</style>
