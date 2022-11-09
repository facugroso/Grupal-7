const boton_buscar = document.getElementById("btnGet1")
const API_URL = "https://636c18037f47ef51e142259b.mockapi.io/";
const BOTON_CREAR = document.getElementById("btnPost")


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
    fetch(API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "name",
        lastname: "lastname",
        id:""
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

  boton_buscar.addEventListener("click", () => {
    fetch("https://636c18037f47ef51e142259b.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Name",
        lastname: "Lastname",
        id:""
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

 
 
