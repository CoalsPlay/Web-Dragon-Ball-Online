// Slider
const btnSlider = document.getElementsByClassName('btn-slider');
const inputSliders = [
  document.querySelector('#slider1'),
  document.querySelector('#slider2'),
  document.querySelector('#slider3')];

const updateClassSlider = () => {
  for (let i = 0; i < inputSliders.length; i++) {
    inputSliders[i].checked
    ? btnSlider[i].classList.add('slider_active')
    : btnSlider[i].classList.remove('slider_active');
  }
}

for (let i = 0; i < btnSlider.length; i++) {
  btnSlider[i].addEventListener('click', () => {
    inputSliders[i].checked = true;
    updateClassSlider();
  });
}

for (let i = 0; i < inputSliders.length; i++) {
  inputSliders[i].addEventListener('change', updateClassSlider);
}

updateClassSlider();

// Tabs
const btnTab = document.getElementsByClassName('btn-tab');
const inputTabs = [
  document.querySelector('#all'),
  document.querySelector('#server'),
  document.querySelector('#events'),
  document.querySelector('#others')];

const updateClassTab = () => {
  for (let i = 0; i < inputTabs.length; i++) {
    inputTabs[i].checked
    ? btnTab[i].classList.add('tab_active')
    : btnTab[i].classList.remove('tab_active');
  }
}

for (let i = 0; i < btnTab.length; i++) {
  btnTab[i].addEventListener('click', () => {
    inputTabs[i].checked = true;
    updateClassTab();
  });
}

for (let i = 0; i < inputTabs.length; i++) {
  inputTabs[i].addEventListener('change', updateClassTab);
}

updateClassTab();
