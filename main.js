

function playSound (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const getKey = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return;//stop function from running completely

    /*in order to be able to hit it multiple times while it is still "playing"
    we need to rewind it every time it is being pressed */

    audio.currentTime=0; //rewind to the start
    audio.play();
    getKey.classList.add('playing');

}
function removeTransition(e) { 
    if(e.propertyName !== 'transform') 
    { 
        return; //do nothing if it not a tranform
    }
    this.classList.remove('playing');
}

const getAllKeys = document.querySelectorAll('.key');
getAllKeys.forEach(getKey=>getKey.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);

