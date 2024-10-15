let btnFrase = document.getElementById("btnFrase");
let frasechuck = document.getElementById("fraseChuck");

const obtenerFrase = async() => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const result = await response.json();
        console.log(result);
        frasechuck.innerHTML = result.value;
        } catch (error) {
            console.log(error);
        }
}

// obtenerFrase();

btnFrase.addEventListener('click', obtenerFrase);