<script setup>
import { computed, ref } from 'vue';

const a=ref('Maksud')
const b=ref('Bhuiyan')

 const myNumber=computed(()=>{
    console.log(a.value)
    return a.value + ' ' + b.value;
});

setTimeout(()=>{
    console.log('setTimeout called')
    console.log(a.value)
    a.value='Mr. '
},2000)


</script>
<template>
<div>

    <h1>{{ myNumber }}</h1>

</div>

</template>
<style>


</style>