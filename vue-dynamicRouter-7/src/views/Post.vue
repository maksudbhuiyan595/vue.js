<script setup>
import {RouterLink}  from 'vue-router'
const posts=[
    {"id" : "1", "title": "Laravel Developer"},
    {"id" : "2", "title": "Vue Developer"},
    {"id" : "2", "title": "Javascript Developer"}
]
</script>

<template>
  
  <div v-for="post in posts" :key="post.id">
  <RouterLink :to="'post/${post.id}'"><h1>{{ post.title }}</h1></RouterLink>
  </div>
</template>
