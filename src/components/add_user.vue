<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="userStore.add">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="userStore.add = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">

<div v-show="!userStore.mostrar">
  <h1>Agregar Nuevo Usuario</h1>
  <form class="space-y-6" @submit.prevent="register">
          <div>
            <label for="nombre" class="block text-sm font-medium text-gray-700"> Nombre </label> 
            <div class="mt-1">
              <input v-model.trim="userStore.nombre" id="nombre" name="nombre" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

           <div>
            <label for="apellido" class="block text-sm font-medium text-gray-700"> Apellido </label> 
            <div class="mt-1">
              <input v-model.trim="userStore.apellido" id="apellido" name="apellido" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

           <div>
            <label for="number" class="block text-sm font-medium text-gray-700"> Numero </label> 
            <div class="mt-1">
              <input v-model.trim="userStore.number" id="number" name="number" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="mt-1">
              <p>Estatus del Usuario</p>
              <p class="mt-2">{{userStore.estatus}}</p>
            </div>

            <div class="mt-1">
                <label for="estatus" class="block text-sm font-medium text-gray-700"> Estatus </label>
            
          <select v-model.trim="estatus" id="estatus">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
            </div>
            

          

</div>


         

         
           

           <div class="mt-5 grid grid-cols-2 gap-4 sm:mt-6">
              <button v-show="!userStore.editar" @submit.prevent="register" type="submit"   class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Agregar</button>
              <button v-show="userStore.editar" @submit.prevent="register" type="submit"   class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Guardar</button>
              <button @click="userStore.add = false,userStore.mostrar = false,userStore.editar = false" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" >Cancelar</button>
            </div>
        

     
        </form>
   </div>

   <div v-show="userStore.mostrar">
    <h1>Datos del Usuario</h1>
    <div class="mt-2 grid grid-cols-2">
      <div class="mt-2">
            <h1 class="block text-sm font-medium text-gray-700"> Nombre </h1> 
            <div class="mt-1">
            <p class="ml-1">{{userStore.nombre}}</p>
            </div>
          </div>

          <div class="mt-2">
            <h1 class="block text-sm font-medium text-gray-700"> Apellido </h1> 
            <div class="mt-1">
            <p class="ml-1">{{userStore.apellido}}</p>
            </div>
          </div>

          <div class="mt-2">
            <h1 class="block text-sm font-medium text-gray-700"> Numero </h1> 
            <div class="mt-1">
            <p class="ml-1">{{userStore.number}}</p>
            </div>
          </div>

           

        

          <div class="grid grid-cols-2">
            <div class="mt-1">
             <h1 class="block text-sm font-medium text-gray-700"> Estatus</h1>
              <p class="mt-2 ml">{{userStore.estatus}}</p>
            </div>
      

</div>

            
          </div>
 
          

         

         
           

           <div class="mt-5 grid grid-cols-2 gap-4 sm:mt-6">
              <button  @click="userStore.mostrar = false,userStore.editar = true"  class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Editar</button>
              <button @click="userStore.add = false,userStore.mostrar = false,userStore.editar = false" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" >Salir</button>
            </div>
        

     
        
   </div>
           
           
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {useUserStore} from '../stores/user' 
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'

 const options = [
    { text: 'Seleccione', value: 0 },
        { text: 'Activo', value: true },
        { text: 'Inactivo', value: false },
        
      ]

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
  setup() {
    const open = ref(true)
     const userStore = useUserStore();

      const nombre = ref(userStore.nombre)
    const apellido = ref(userStore.apellido)  
     const number = ref(userStore.number)
      const estatus = ref(options[0])

         

    const register = async() => {
      console.log(estatus.value)



      if (userStore.editar)
          await userStore.update_user(estatus.value) 
        else
      await userStore.add_user(estatus.value)  
      
    }

      


    return {
      open,
      userStore,
      register,
      options,
      nombre,
      apellido,
      number,
      estatus
    }
  },
}
</script>