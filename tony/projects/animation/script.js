const animationDisplayEl = document.querySelector(".animationDisplay");

function setShinePosition(xRatio, yRatio) {
  const xOffset = 1 - (xRatio - 0.5) * 800;
  const yOffset = 1 - (yRatio - 0.5) * 800;
  animationDisplayEl.style.setProperty("--shineX", `${xOffset}px`);
  animationDisplayEl.style.setProperty("--shineY", `${yOffset}px`);
}

function handleMouseMove(event) {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const yAxisDegree = (event.pageX / width) * 40 - 20;
  const xAxisDegree = (event.pageY / height) * -1 * 40 + 20;
  animationDisplayEl.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
  setShinePosition(event.pageX / width, event.pageY / width);
}

document.onmousemove = handleMouseMove;
