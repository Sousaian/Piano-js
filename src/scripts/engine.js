const pianoKeys = document.querySelectorAll(".piano_keys .key");
const volumeSlider = document.querySelector(".volume_slider input");
const keysCheck = document.querySelector(".keys_check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/g.wav");


// Função para tocar as notas
const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

//Função para adicionar o evento de click as teclas
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));

    mapedKeys.push(key.dataset.key);
});

//Função para adicionar o evento de pressionar as teclas
document.addEventListener("keydown", (e) => {
    if(!mapedKeys.includes(e.key)) return;
    playTune(e.key);
});

//Função para controlar o volume
const handleVolume = (e) => {
    audio.volume = parseFloat(e.target.value);
};
volumeSlider.addEventListener("input", handleVolume);

//Função para controlar as teclas
const showHideKeys = () => {
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    });
};

keysCheck.addEventListener("click", showHideKeys);