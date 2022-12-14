import { defineStore } from "pinia";
import router from "../router";


export const useUserStore = defineStore("userStore", {

    state: () => ({
            userData: null,
            users: [],
            add: false,
            user_id: '',
            nombre: '',
            apellido: '',
            number: '',
            estatus: '',
            mostrar:false,
            editar: false
              }

    ),
    persist: {
        paths: ['userData'],
    },

    actions: {
        async reset() {
            this.user_id = ''
            this.nombre = ''
             this.apellido = ''
              this.number = ''
              this.estatus = ''
              this.add = true
              this.mostrar = false
              this.editar = false
           

        

           
        },
         async get_users() {
            console.log('entre')

        

            try {



                //let myHeaders = new Headers();
               // myHeaders.append("Authorization", "Bearer " + valor);
               // myHeaders.append("Cookie", "PHPSESSID=boh7ejg10hajd7g4e94f6r3cpo; csrfToken=fOK%2BNaerF5hObyziagqDq2YxNjg2OTIxODNmZDE2ODYwYmFhMmVhMzk1MTU4NGVkNDFhYzMyZGY%3D");



                let users = []
                

                var requestOptions = {

                    method: "GET",


                };



                await fetch("http://127.0.0.1:5000/", requestOptions)
                    .then(response => response.json())
                    .then(json =>  {

                        console.log(json)
                        this.users = json






                    })
                    .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
               

            }
        },
async get_user(id) {
            console.log('entre get')
            console.log(id)

        

            try {



                var requestOptions = {

                    method: "GET",


                };



                await fetch('http://127.0.0.1:5000/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(json =>  {

                        console.log(json)
                        this.user_id = json.id
                        this.nombre = json.nombre
                        this.apellido = json.apellido
                        this.number = json.number

                        if(json.estatus == true)
                        this.estatus = 'Activo'
                        else
                        this.estatus = 'Inactivo'
                       

                    })
                    .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
               

            }
        },

         async add_user(estatus) {
            console.log('entre add')
                   

            try {



                //let myHeaders = new Headers();
               // myHeaders.append("Authorization", "Bearer " + valor);
               // myHeaders.append("Cookie", "PHPSESSID=boh7ejg10hajd7g4e94f6r3cpo; csrfToken=fOK%2BNaerF5hObyziagqDq2YxNjg2OTIxODNmZDE2ODYwYmFhMmVhMzk1MTU4NGVkNDFhYzMyZGY%3D");



                let raw = {
                    "nombre": this.nombre,
                    "apellido": this.apellido,
                    "number": this.number,
                    "estatus": estatus,
                   
                }
                

                var requestOptions = {

                    method: "POST",
                   body: JSON.stringify(raw),
                    headers: { "Content-Type": "application/json" },


                };



                await fetch("http://127.0.0.1:5000/add", requestOptions)
                    .then(response => response.json())
                    .then(json =>  {

                        console.log(json)
                        


                        this.add = false;
                        this.get_users()



                    })
                    .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
                this.nombre = ''
            this.apellido = ''
            this.number = ''
            this.estatus = '' 
               

            }
        },

async update_user(estatus) {
           
                   console.log('actualizando')
                   console.log(estatus)
                   

            try {



                //let myHeaders = new Headers();
               // myHeaders.append("Authorization", "Bearer " + valor);
               // myHeaders.append("Cookie", "PHPSESSID=boh7ejg10hajd7g4e94f6r3cpo; csrfToken=fOK%2BNaerF5hObyziagqDq2YxNjg2OTIxODNmZDE2ODYwYmFhMmVhMzk1MTU4NGVkNDFhYzMyZGY%3D");



                let raw = {
                    "nombre": this.nombre,
                    "apellido": this.apellido,
                    "number": this.number,
                    "estatus": estatus,
                   
                }
                

                var requestOptions = {

                    method: "PUT",
                   body: JSON.stringify(raw),
                    headers: { "Content-Type": "application/json" },


                };



                await fetch('http://127.0.0.1:5000/update/'+ this.user_id, requestOptions)
                    .then(response => response.json())
                    .then(json =>  {

                        console.log(json)
                        


                        this.add = false;
                        this.get_users()



                    })
                    .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
               
               

            }
        },

       
       
async DELETE_user(id) {
            console.log('entre DELETE')
           

        

            try {



                //let myHeaders = new Headers();
               // myHeaders.append("Authorization", "Bearer " + valor);
               // myHeaders.append("Cookie", "PHPSESSID=boh7ejg10hajd7g4e94f6r3cpo; csrfToken=fOK%2BNaerF5hObyziagqDq2YxNjg2OTIxODNmZDE2ODYwYmFhMmVhMzk1MTU4NGVkNDFhYzMyZGY%3D");



                

                var requestOptions = {

                    method: "DELETE",


                };



                await fetch('http://127.0.0.1:5000/delete/'+ id, requestOptions)
                    .then(response => response.json())
                    .then(json =>  {

                        console.log(json)
                        



                        this.get_users()


                    })
                    .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
               

            }
        },

       
       async mostrar(dato) {
            console.log(dato)

        

           
        },



          





    },

});