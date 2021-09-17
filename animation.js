const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// Snap is JS-SVG Library
const svg = Snap(canvasWidth, canvasHeight);

Snap.addClass("animation"); // return original element.

function AngleToRadian(angle) {
  return (angle / 180) * Math.PI;
}
function getRandomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
function getRandomColor() {
  const rgb1 = Math.floor(Math.random() * 257);
  const rgb2 = Math.floor(Math.random() * 257);
  const rgb3 = Math.floor(Math.random() * 257);
  return rgb(rgb1, rgb2, rgb3);
}
