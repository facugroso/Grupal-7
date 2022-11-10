const boton_buscar = document.getElementById("btnGet1")
const API_URL = "https://636c18037f47ef51e142259b.mockapi.io/";
const BOTON_CREAR = document.getElementById("btnPost")
const BOTON_MODIFICAR = document.getElementById("btnPut")
const modal = document.getElementById("dataModal")
const BOTON_BORRAR = document.getElementById("btnDelete")
let userarray = []

document.addEventListener("DOMContentLoaded", () => {
  fetch(API_URL + "users/" + document.getElementById("inputGet1Id").value, {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      userarray = dataResponse
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});

boton_buscar.addEventListener("click", () => {
  fetch(API_URL + "users/" + document.getElementById("inputGet1Id").value, {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      userarray = dataResponse
      if (Array.isArray(dataResponse)) showusers(dataResponse)
      else { showusers2(dataResponse) }
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
  });
  fetch(API_URL + "users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      userarray = dataResponse
      if (Array.isArray(dataResponse)) showusers(dataResponse)
      else { showusers2(dataResponse) }
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});

BOTON_MODIFICAR.addEventListener("click", async () => {
  let user = {}
  await fetch(API_URL + "users/" + document.getElementById("inputPutId").value, {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
      user = dataResponse;

    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
  const nombre = document.getElementById("inputPutNombre");
  const apellido = document.getElementById("inputPutApellido");
  console.log(user)
  nombre.value = user.name;
  apellido.value = user.lastname;
});


const guardar = document.getElementById("guardar_cambio")
guardar.addEventListener("click", async () => {
  await fetch(API_URL + "users/" + document.getElementById("inputPutId").value, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("inputPutNombre").value,
      lastname: document.getElementById("inputPutApellido").value,


    })
  })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
  await fetch(API_URL + "users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      showusers(dataResponse)
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
})







BOTON_BORRAR.addEventListener("click", async () => {
  await fetch(API_URL + "users/" + document.getElementById("inputDelete").value, {
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
  await fetch(API_URL + "users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((dataResponse) => {
      showusers(dataResponse)
    })
    .catch((error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
});


function showusers(userarray) {
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

function showusers2(userarray) {
  let users = userarray
  document.getElementById("results").innerHTML = `${users.id} ${users.name} ${users.lastname}`;
}
