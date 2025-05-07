// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth  = window.speechSynthesis;
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const face = document.querySelector('#explore img');

  let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})${voices[i].default ? ' -- DEFAULT' : ''}`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}
  
populateVoiceList();
if(synth.onvoiceschanged !== undefined){
  synth.onvoiceschanged = populateVoiceList;
}

talkButton.addEventListener('click', () => {
  const text = textToSpeak.value.trim();
  if (!text) return;

  const utterThis = new SpeechSynthesisUtterance(text);
  const selectedVoiceIndex = voiceSelect.value;
  if(selectedVoiceIndex !== '') {
    utterThis.voice = voices[parseInt(selectedVoiceIndex, 10)];
  }

  utterThis.onstart = () => {
    face.src = 'assets/images/smiling-open.png';
  }

  utterThis.onend = () => {
    face.src = 'assets/images/smiling.png';
  }

  synth.speak(utterThis);
});
}