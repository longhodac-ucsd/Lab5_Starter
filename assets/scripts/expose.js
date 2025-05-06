// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById("expose");
  const partyHornImg = expose.querySelector('img');
  const hornSelect = document.getElementById("horn-select");
  const sound = expose.querySelector('audio.hidden');

  hornSelect.addEventListener('change', () => {
    const target = hornSelect.value;
    if(target){ 
      partyHornImg.src = '/assets/images/' + target + '.svg';
      partyHornImg.alt = target;
      sound.src = '/assets/audio/' + target + '.mp3';
    }else{
      partyHornImg.src = '/assets/images/no-image.png';
      partyHornImg.alt = "No image selected";
      sound.alt = target;
    }
    sound.load();
  });

  const volumeControl = document.getElementById("volume-controls");
  const slider = volumeControl.querySelector('input');
  const playButton = expose.querySelector('button');


  slider.addEventListener('input', () => {
    const vol = slider.value / 100;
    sound.volume = vol;
  });

  playButton.addEventListener('click', ()=> {
    sound.play().catch(err => console.warn('Play failed:', err));
  });


}