const root = document.documentElement;
const colorBoxes = document.querySelectorAll('.color-boxes');
const slider = document.querySelector('.booth-slider');

colorBoxes.forEach(colorBox => {
  colorBox.addEventListener('input', handleBoxColorInputChange);
})

slider.addEventListener('input', handleSliderValueInputChange);

function handleBoxColorInputChange (e) {
  const colorVal = e.target.value;
  const id = e.target.parentNode.id;
  const boxColorId = `--box-color${id}`

  root.style.setProperty(boxColorId, colorVal);
}

function handleSliderValueInputChange (e) {
  const sliderVal = e.target.value;
  
  root.style.setProperty('--slider-val', sliderVal);
}

