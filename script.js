
window.addEventListener('keydown', playSound);


function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('transitionend', endTransition);
});  

function endTransition(e){
    if(e.propertyName !== "transform"){
        e.target.classList.remove("playing")
    }
}