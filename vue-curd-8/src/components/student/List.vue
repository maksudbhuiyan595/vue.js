<script setup>
import { 
      PencilIcon,
      EyeIcon,
      UserPlusIcon,
      TrashIcon
      } from '@heroicons/vue/24/solid'

</script>

<template>
      <div class="text-center
            bg-orange-600
            p-2
            text-[#fff]
            text-xl">
            
            Student Lists
      </div>

      <div>
            <table class="table-fixed ">
                  <thead class="bg-slate-600
                               text-white">
                        <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Action</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>1</td>
                              <td>Maksud</td>
                              <td>maksud@gmail.com</td>
                              <td class="flex">
                                   
                                    <EyeIcon/>
      
                                  <PencilIcon/>
                                  <TrashIcon/>
                                    
                              </td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>
<style></style>