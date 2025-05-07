// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById("expose");
  const partyHornImg = expose.querySelector('img');
  const hornSelect = document.getElementById("horn-select");
  const sound = expose.querySelector('audio.hidden');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const target = hornSelect.value;
    if(target){ 
      partyHornImg.src = './assets/images/' + target + '.svg';
      partyHornImg.alt = target;
      sound.src = './assets/audio/' + target + '.mp3';
    }else{
      partyHornImg.src = './assets/images/no-image.png';
      partyHornImg.alt = "No image selected";
      sound.alt = target;
    }
    sound.load();
  });

  const volumeControl = document.getElementById("volume-controls");
  const slider = volumeControl.querySelector('input');
  const volumeIcon = volumeControl.querySelector('img');
  const playButton = expose.querySelector('button');

  function updateVolumeIcon(value) {
    if (value === 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume muted';
    } else if (value > 0 && value < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (value >= 33 && value < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }

  slider.addEventListener('input', () => {
    updateVolumeIcon(parseInt(slider.value));
    const vol = slider.value / 100;
    sound.volume = vol;
  });

  updateVolumeIcon(parseInt(slider.value));

  playButton.addEventListener('click', ()=> {
    sound.play().catch(err => console.warn('Play failed:', err));

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });


}