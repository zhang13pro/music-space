const audio00 = "./assets/audio/沙锤.mp3";
const audio01 = "./assets/audio/脚鼓.mp3";
const audio02 = "./assets/audio/饶钹.mp3";
const audio10 = "./assets/audio/踏钹.mp3";
const audio11 = "./assets/audio/军鼓.mp3";
const audio12 = "./assets/audio/掌声.mp3";
const bgMusic = "./assets/audio/bgmusic.mp3";

const musicFragments = [
  [audio00, audio01, audio02],
  [audio10, audio11, audio12],
];

function getCurBgColor(bgChangeCnt) {
  const colors = ["#efcb7b", "#0d1831", "#ff9b83", "#61bfad"];
  // Why /5 then %4
  bgChangeCnt /= 5;
  return colors[bgChangeCnt % 4];
}

const elmOverlay = document.querySelector(".shape-overlays");
const overlay = new ShapeOverlays(elmOverlay);
