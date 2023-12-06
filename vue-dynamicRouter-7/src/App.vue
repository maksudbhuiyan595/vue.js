<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Abouts</RouterLink>
        <RouterLink to="/post">Posts</RouterLink>
        <hr>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  nav{
    width: 100%;
    font-size: 24px;
    text-align: center;
    align-items: center;

  }
  nav a{
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    
  }
  nav a:hover{
    background-color:rgb(69, 69, 53);
    border-radius: 5%;
    color: #fff;
  }
</style>
