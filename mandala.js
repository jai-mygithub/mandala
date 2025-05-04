let faces = 16;
let color = "rgb(100, 180, 255)";
let canvas;
let colorInput;

function clearCanvas() {
  background("#181A23");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  clearCanvas();
  translate(width / 2, height / 2);
}

function changeFaces() {
  faces = document.getElementById("changeFaces").value;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());

  colorInput = document.getElementById("color");
  colorInput.style.backgroundColor = color;

  setupColoris(colorInput);

  clearCanvas();
  angleMode(DEGREES);
  strokeWeight(5);
  translate(width / 2, height / 2);
}

function setupColoris(inputElement) {
  Coloris({
    themeMode: "dark",
    alpha: false,
    swatchesOnly: true,
    defaultColor: color,
    swatches: [
      "rgb(255,80,80)",
      "rgb(255,160,60)",
      "rgb(255,255,80)",
      "rgb(120,255,100)",
      "rgb(80,255,200)",
      "rgb(100, 180, 255)",
      "rgb(160,120,255)",
      "rgb(255,100,255)",
      "rgb(255,130,200)",
    ],
  });

  document.addEventListener("coloris:pick", (event) => {
    color = event.detail.color;
    inputElement.style.backgroundColor = color;
    inputElement.style.color = color;
  });
}

function mousePressed() {
  if (mouseButton.right) {
    clearCanvas();
  }
}

function mouseDragged() {
  if (mouseButton.right) return;

  stroke(color);
  for (let i = 0; i < faces; i++) {
    line(
      pmouseX - width / 2,
      pmouseY - height / 2,
      mouseX - width / 2,
      mouseY - height / 2
    );
    rotate(360 / faces);
  }
}

function mouseReleased() {
  colorInput.dispatchEvent(new Event("input", { bubbles: true }));
}
