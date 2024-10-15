let btnFrase = document.getElementById("btnFrase");
let fraseChuck = document.getElementById("fraseChuck");

const obtenerFrase = async() => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const result = await response.json();
        console.log(result);
        fraseChuck.innerHTML = result.value;
        } catch (error) {
            console.log(error);
        }
}

// obtenerFrase();
btnFrase.addEventListener('click', obtenerFrase);


const freseInicio = async() => {
    try {
        let response = await obtenerFrase();
        fraseChuck.innerHTML = response.value;
        } catch (error) {
    }
};

freseInicio();