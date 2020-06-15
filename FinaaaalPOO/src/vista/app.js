import { request } from "express";

const btnAgregar = document.getElementById("btnAgregar").addEventListener("click", (e)=>){

 let Nombre = parseInt(document.getElementById("Nombre").value);
 let Grado = parseInt(document.getElementById("Grado").value);
 let Grupo = parseInt(document.getElementById("Grupo").value);
 let Promedio = parseInt(document.getElementById("Promedio").value);
 let ID = parseInt(document.getElementById("ID").value);

 requestt.open("POST", "http://localhost:3000/api/alumnos/", true);
 requestt.setRequestHeader("Cont-Type", "application/x-www-form-urlncoded");

 requestt.onreadystatechange=function(){
     if(this.readySate === XMLHttpRequest.DONE && this.status === 200)
     {
         let detalles=document.getElementById("details");
           detalles.innerHTML += `
           <div>
             <p><strong>ID: ${this.response} </p>
           </div>`;
     }
 }
 request.send( alumnos.Nombre + alumnos.Grado + alumnos.Grupo + alumnos.Promedio);
};

const btnMostrar = document.getElementById("btnMostrar").addEventListener("click", (e)=>{
        var request=new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/alumnos", true);
        request.onload = function(){
            let dato=JSON.parse(this.response);
            let detalles = document.getElementById("details");
            if(request.status >=200 && request.status <=400){
                detalles.innerHTML +=`
                <div class = "card text-white bg-dark mb-3" style="max-width: 18rem;">
                 <div class= "card-header"> ${this.response}</div>
                 </div>`
            }
            else{
               console.log("ERROR");
               detalles.innerHTML += "Error en la llamada a API"

            }
        }
        request.send();
    };
};


const btnActualizar = document.getElementById("btnActualizar").addEventListener("click", (e)=>){

 let Nombre = parseInt(document.getElementById("Nombre").value);
 let Grado = parseInt(document.getElementById("Grado").value);
 let Grupo = parseInt(document.getElementById("Grupo").value);
 let Promedio = parseInt(document.getElementById("Promedio").value);
 let ID = parseInt(document.getElementById("ID").value);

 requestt.open("PUT", "http://localhost:3000/api/alumnos/", true);
 requestt.setRequestHeader("Cont-Type", "application/x-www-form-urlncoded");

 requestt.onreadystatechange=function(){
     if(this.readySate === XMLHttpRequest.DONE && this.status === 200)
     {
         let detalles=document.getElementById("details");
           detalles.innerHTML += `
           <div>
             <p><strong>ID: ${this.response} </p>
           </div>`;
     }
 }
 request.send( alumnos.Nombre + alumnos.Grado + alumnos.Grupo + alumnos.Promedio);
};

const btnEliminar = document.getElementById("btnEliminar").addEventListener("click", (e)=>){

    let ID = parseInt(document.getElementById("ID").value);
   
    requestt.open("DELETE", "http://localhost:3000/api/alumnos/", true);
    requestt.setRequestHeader("Cont-Type", "application/x-www-form-urlncoded");
   
    requestt.onreadystatechange=function(){
        if(this.readySate === XMLHttpRequest.DONE && this.status === 200)
        {
            let detalles=document.getElementById("details");
              detalles.innerHTML += `
              <div>
                <p><strong>ID: ${this.response} </p>
              </div>`;
        }
    }
    request.send("Eliminado");
   };
