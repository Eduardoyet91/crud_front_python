<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 mt-8 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Usuarios</h1>
        <p class="mt-2 text-sm text-gray-700">Lista de todos los Usuarios</p>
      </div>
      <div class="mt-4 gap-4 grid grid-cols-2 sm:mt-0 sm:ml-16 ">
        <button @click="userStore.get_users()" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Listar Usuarios </button>
        <button @click="userStore.get_users(),userStore.reset()" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Agregar Usuario </button>
        
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-500">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">id</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nombre</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Apellido</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Number</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Estatus</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Acciones</th>
                  
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                
              
                <tr v-for="user in userStore.users" :key="user.id" :class="[user.estatus ? 'bg-green-200' : 'bg-red-200', '']">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ user.id}}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ user.nombre }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ user.apellido }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ user.number }}</td>
                   <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ user.estatus }}</td>
                  <td class="relative whitespace-nowrap flex gap-4 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button @click="userStore.get_user(user.id),userStore.add = true,userStore.editar = true" class="text-indigo-600 hover:text-indigo-900"
                      >Editar</button>
                    <button @click="userStore.DELETE_user(user.id)" class="text-indigo-600 hover:text-indigo-900"
                      >Eliminar</button>
                   <button @click="userStore.add = true,userStore.mostrar = true,userStore.get_user(user.id)" class="text-indigo-600 hover:text-indigo-900"
                      >Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Add/>
  </div>
</template>

<script>
import {useUserStore} from '../stores/user' 
import Add from '../components/add_user.vue'
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default {
  components: {
    Add
  },
  setup() {
    const userStore = useUserStore();
    return {
      people,
      userStore
    }
  },
}
</script>