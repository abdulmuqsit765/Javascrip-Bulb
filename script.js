const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggleBtn');

let isOn = false;

toggleBtn.addEventListener('click', function() {
  isOn = !isOn;
  if (isOn) {
    bulb.classList.add('on');
    toggleBtn.textContent = 'Turn Off';
  } else {
    bulb.classList.remove('on');
    toggleBtn.textContent = 'Turn On';
  }
});
