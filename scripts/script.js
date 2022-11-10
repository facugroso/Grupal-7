const boton_buscar = document.getElementById("btnGet1")
const API_URL = "https://636c18037f47ef51e142259b.mockapi.io/";
const BOTON_CREAR = document.getElementById("btnPost")
const BOTON_MODIFICAR = document.getElementById("btnPut")
const modal = document.getElementById("dataModal")
const BOTON_BORRAR = document.getElementById("btnDelete")
let userarray = []


const listData = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      showListData(data);
    })
    .catch((error) => alert("Ocurrió un error"));
};
listData();

boton_buscar.addEventListener("click", () => {
  fetch(API_URL + "users/" + document.getElementById("inputGet1Id").value, {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
      userarray = dataResponse
      if (Array.isArray(dataResponse)) showusers(dataResponse)
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});

BOTON_CREAR.addEventListener("click", () => {
  fetch("https://636c18037f47ef51e142259b.mockapi.io/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("inputPostNombre").value,
      lastname: document.getElementById("inputPostApellido").value,


    })
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});

BOTON_MODIFICAR.addEventListener("click", () => {
  fetch(API_URL + "users/" + document.getElementById("inputPutId").value, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("inputPostNombre").value,
      lastname: document.getElementById("inputPostApellido").value,


    })
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});

BOTON_BORRAR.addEventListener("click", () => {
  fetch(API_URL + "users/" + document.getElementById("inputDelete").value, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("inputPostNombre").value,
      lastname: document.getElementById("inputPostApellido").value,


    })
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});


function showusers(userarray) {
  console.log(userarray)
  let userlist = "";


  for (let i = 0; i < userarray.length; i++) {
    let users = userarray[i];
    userlist += `
      <div class="col-md-6">
      <ul>
                ${users.id} ${users.name} ${users.lastname} </ul>
            </div>
        
`;

  }
  document.getElementById("results").innerHTML = userlist;
}

function showusers2 (userarray){
  document.getElementById("results").innerHTML = `${id} ${name} ${lastname}`;
}

