import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "./stores/user";


import Start from "./views/Start.vue";








const routes = [
    
    { path: "/", component: Start },
    
    

];


const router = createRouter({
    routes,
    history: createWebHashHistory(),

});

export default router;