const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {
    console.log(newUrl);
  new Audio(newUrl).play()
}

pianoKeys.forEach((key,i) => {
    const num = i < 9 ? '0' + (i + 1) : (i + 1);
    const newUrl = '24-piano-keys/key' + num + '.mp3';
    key.addEventListener('click',() => playSound(newUrl))
});