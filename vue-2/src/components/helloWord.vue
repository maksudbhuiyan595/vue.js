<script setup>
import { reactive } from 'vue';
import header from './header.vue';

/* const num=reactive({a:10,b:20});
setTimeout(()=>{
    num.a=30
},2000) */

const obj=reactive({
    count: 0,
    name:[
        "tanvir","foysal"
    ]
});

setTimeout(()=>{
    console.log('setTimeOut called')
    console.log("Obj.count",obj.count)
    obj.count++
    console.log("obj.name", obj.name)
    obj.name.push('maksud')
},2000)

</script>

<template>
  <div>
    <!-- <h1>Sum: {{ num.a + num.b }}</h1> -->
    <h1>Count: {{ obj.count }}</h1>
    <h1>User : {{ obj.name }}</h1>
    <h1>User1: {{ obj.name['0'] }}</h1>
    <h1>User 2: {{ obj.name['1'] }}</h1>

   


  </div>
</template>

<style scoped>

</style>
