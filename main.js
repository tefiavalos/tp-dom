const gatos = [
    {
      name: "Rodolfo",
      shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/rodolfo.png",
      colores: ["negro, blanco"],
      sexo: "masc"
    },
  
    {
      name: "Muzzarella",
      shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/muzza.png",
      colores: ["blanco"],
      sexo: "fem"
    },
  
    {
      name: "Artilugia",
      shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/artilugia.png",
      colores: ["gris, blanco"],
      sexo: "fem"
    },
  
    {
      name: "Wosito",
      shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/wosito.png",
      colores: ["tricolor"],
      sexo: "masc"
    },
  
    {
      name: "Calamardo",
      shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/calamardo.png",
      colores: ["gris"],
      sexo: "masc"
    },
    
  ]
  let contenedor = document.querySelector("section") 
  let card = document.getElementById("card")


   for (let i = 0; i < gatos.length; i++) {
    const gato = gatos[i];
  
    let nombre = gato.name
    let descripcion = gato.shortDesc
    let descripcionLarga = gato.longDesc
    let img = gato.img 
    card.innerHTML = card.innerHTML + `
    
    <div class="img"><img src="${img}"></div>
    <div class="descripcion">
    <h2>${nombre}</h2>
    <p>${descripcion}</p>
    <button class="mostrarModal">Ver más</button>
    </div>`

  }

    let botones = document.getElementsByClassName("mostrarModal")
    for (let i = 0; i < botones.length; i++) {
        botones[i].onclick = () => {
    let modalContainer = document.getElementById("modalContainer")
    modalContainer.classList.remove("nomostrar")
    
    const gato = gatos[i];
    let nombre = gato.name
    let descripcion = gato.shortDesc
    let descripcionLarga = gato.longDesc
    let img = gato.img 
    let divModal = document.getElementById("contenidoDelModal")

    divModal.innerHTML = `
    <div class="modal">
    <div class="imgModal"><img src="${img}"></div>
    <div class="descripcionModal">
    <h2>${nombre}</h2>
    <p>${descripcionLarga}</p>
    </div>
    </div>
    `
        }
    }
    
    
    let botonCerrar = document.getElementById("cerrarModal")
    
    
    botonCerrar.onclick = () => {
      let modales = document.querySelector("#modalContainer")
       modales.classList.add("nomostrar")
    }

    
    const formularios = document.querySelector("form") 
    const checkBox = document.querySelectorAll("input[type= 'checkbox']")
    const radio = document.querySelectorAll("input[type= 'radio']")
    const text = document.querySelectorAll("input[type= 'text']")
    const tel = document.querySelectorAll("input[type= 'number']")
 

    const nombreUsuario = text[0]
    const telefonoUsuario = tel[0]

    //const formGatos = documents.forms[3]
    //console.log(formularios)

    formularios.onsubmit = e => {
      e.preventDefault();
      console.log(`tu nombre es ${nombreUsuario.value} y tu tel ${telefonoUsuario.value}`)
     let opcionesElegidas = [];
      for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
          opcionesElegidas.push(checkBox[i].value)
      };
     }

     

     if (!opcionesElegidas.length) {
      console.log("No soleccionó ninguna opción")
    } else {
      if (opcionesElegidas.length === 1) {
        console.log(`Elegiste la opción ${opcionesElegidas[0]}`)
      } else {
        console.log(`Elegiste las opciones ${opcionesElegidas.join(" , ")}`)
      }
    }
    let acumuladoraColor = ""
  
    for (let i = 0; i < gatos.length; i++) {
  
      for (let j = 0; j < gatos[i].colores.length; j++) {
  
        if (gatos[i].colores.includes(opcionesElegidas[j])) {
  
          acumuladoraColor += `
       <div>
       <img src=${gatos[i].img} alt=${gatos[i].name}>
       <h3>${gatos[i].name}</h3>
       <p>${gatos[i].shortDesc}</p>
       <button class="boton-vermas">Ver mas</button>
       </div>`
          break;
        }
  
      }
      card.innerHTML = acumuladoraColor;
    }
  
    let opcionesElegidasRadio = ""
  
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        opcionesElegidasRadio += radio[i].value
        console.log(`El sexo elegido es ${opcionesElegidasRadio}`)
  
      }
  
    }
    if (!opcionesElegidasRadio.length) {
      console.log("No soleccionó ninguna sexo")
  
    }
  
    let acumuladoraGatos = ""
  
    for (let i = 0; i < gatos.length; i++) {
      if (gatos[i].sexo === opcionesElegidasRadio) {
        acumuladoraGatos += `
        <div>
        <img src=${gatos[i].img} alt=${gatos[i].name}>
        <h3>${gatos[i].name}</h3>
        <p>${gatos[i].shortDesc}</p>
        <button class="boton-vermas">Ver mas</button>
        </div>`;
  
      }
      card.innerHTML += acumuladoraGatos;
  
    }
  
  }  
  
  
     
 
     //console.log(nombre)
     /*for (let i = 0; i < checkboxes.length; i++) {
       let opcionesElegidas = [];
      if (checkboxes[i].checked) {
        opcionesElegidas.push(checkboxes[i].value)
        opcionesElegidas.push(nombre.value)
        opcionesElegidas.push(numero.value)
     };
     console.log(opcionesElegidas)
    }*/

    
