<script setup>
import { reactive } from 'vue';


const formData=reactive({
    name:" ",
    email: " ",
    password: " ",
    checkbox: false,
    delivery: "no",
    hobbies:[],
    gender:"",
    state:"",
})
</script>

<template>

  <div>
     <p>Name: {{ formData.name }}</p>
     <p>Email: {{ formData.email }}</p>
     <p>Password: {{ formData.password }}</p>
     <p>Chekcbox: {{ formData.checkbox }}</p>
     <p>Devilery: {{ formData.delivery }}</p>
     <p>Hobbies: {{ formData.hobbies }}</p>
     <p>Gender: {{ formData.gender }}</p>
     <p>State: {{ formData.state }}</p>

       <h1>Form Table</h1>
       <hr>
        <form  @submit.prevent="">
            <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="formData.name">
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="formData.email">
            </div>
            <div class="mb-3">
                <label for="password">password</label>
                <input type="password" name="password" id="password" v-model="formData.password">
            </div>
            <div class="mb-3">
                <label for="checkbox">checkbox</label>
                <input type="checkbox" name="checkbox" id="checkbox" v-model="formData.checkbox">
            </div>
            <div class="mb-3">
                <label for="">Delivery</label>
                <input 
                type="checkbox"
                 name="delivery" 
                 id="" 
                 true-value="yes"
                 fasle-value="no"
                 v-model="formData.delivery">
            </div>
            <div class="mb-3">
                <label for="">Hobbies</label>
                <input 
                type="checkbox"  
                name="hobbies" 
                id=""
                value="cooking"
                v-model="formData.hobbies">

                <input 
                type="checkbox"  
                name="hobbies" 
                id=""
                value="reading"
                v-model="formData.hobbies">

              
                <input 
                type="checkbox"  
                name="hobbies" 
                id=""
                value="singings"
                v-model="formData.hobbies">
            </div>
            <div class="mb-3">	
                <label for="">Gender</label>
                <input
                 type="radio"
                 name="male"
                 id=""
                 value="male"
                 v-model="formData.gender">
                
                <input
                 type="radio"
                 name="female"
                 id=""
                 value="female"
                 v-model="formData.gender">
            </div>
            <select v-model="formData.state" name="state" id="">
                <option >Bangladesh </option>
                <option >Pakistan </option>
                <option >Palistain </option>
                <option >Nepal </option>
            </select>
        <button type="submit">Submit </button>
       </form>
  </div>
</template>

<style>


</style>