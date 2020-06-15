const btnAgregar = document.getElementById("btnAgregar").addEventListener("click", (e)=>{
  var requestt=new XMLHttpRequest();
 let Nombre = (document.getElementById("txtNombre").value);
 let Grado = parseInt(document.getElementById("txtGrado").value);
 let Grupo = (document.getElementById("txtGrupo").value);
 let Promedio = parseInt(document.getElementById("txtPromedio").value);
 let ID = parseInt(document.getElementById("txtID").value);

 requestt.open("POST", "http://localhost:3000/api/alumnos/", true);
 requestt.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

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

 requestt.send( "Nombre=" + Nombre + "&Grado=" + Grado + "&Grupo=" + Grupo + "&Promedio=" + Promedio + "&ID=10");
});

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
 });



const btnActualizar = document.getElementById("btnActualizar").addEventListener("click", (e)=>{
  var requestt=new XMLHttpRequest();
 let Nombre = parseInt(document.getElementById("txtNombre").value);
 let Grado = parseInt(document.getElementById("txtGrado").value);
 let Grupo = parseInt(document.getElementById("txtGrupo").value);
 let Promedio = parseInt(document.getElementById("txtPromedio").value);
 let ID = parseInt(document.getElementById("txtID").value);

 requestt.open("PUT", "http://localhost:3000/api/alumnos/" + ID, true);
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
  requestt.send( "Nombre=" + Nombre + "&Grado=" + Grado + "&Grupo=" + Grupo + "&Promedio=" + Promedio + "&ID=10");
});

const btnEliminar = document.getElementById("btnEliminar").addEventListener("click", (e)=>{
  var requestt=new XMLHttpRequest();
    let ID = parseInt(document.getElementById("txtID").value);
   
    requestt.open("DELETE", "http://localhost:3000/api/alumnos/" + ID , true);
    requestt.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
   
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
    //requestt.send();
});
