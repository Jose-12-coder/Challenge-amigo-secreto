// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("No insertaste un nombre, por favor, inserta uno.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    if (amigos.length > 0) {
        let inicioLista = document.createElement("li");
        inicioLista.textContent = "Los amigos que has agregado son:";
        inicioLista.style.fontWeight = "bold"; 
        lista.appendChild(inicioLista);
    }

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}.- ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No tienes amigos aún, venga, agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Yeiii, el amigo secreto es: <strong>${amigoSorteado}</strong> 🌼</li>`;
}
