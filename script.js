//Global variables.
let square;

//Creates a button to start it all.
let head = document.getElementById("head");
let start = document.createElement("button");
start.setAttribute("id", "button");
start.textContent = "New Pad";
start.addEventListener("click", () => {
  removeElementsByClass("square");
  askSquaresF();
});
head.appendChild(start);

//Make an input to get the users info bout how much squares it
//want per side.
function askSquaresF() {

  let askSquares = prompt("How much squres per side? Max = 50.");
  if (askSquares > 50) {
    alert("Max squares per side = 50");
  } else createNewGrid(askSquares);
  console.log(askSquares);
}

//function that removes square childs.
function removeElementsByClass(square) {
  const elements = document.getElementsByClassName(square);
  while(elements.length > 0){
    container.removeChild(elements[0]);
  }
}

//Create the new grid based on user's squares quantity selection.
//Also config the squares aspect.
function createNewGrid(askSquares) {
  for (let i = 0; i < askSquares * askSquares; i++) {
    let container = document.getElementById("container");
    square = document.createElement("div");
    container.style.setProperty("--askSquares", askSquares);
    container.appendChild(square);
    square.setAttribute("id", "square" + [i]);
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", () =>
      changeToPurpleColor("square" + [i])
    );
  }
}

//Change BG color of square to purple while mouse over it.
function changeToPurpleColor(square) {
  document.getElementById(square).style.backgroundColor = "purple";
  document.getElementById(square).style.border = "0.1px solid black";
}
//Change back BG color to white after mouse leave the square.
function changeToWhiteColor(square) {
  document.getElementById(square).style.backgroundColor = "white";
  document.getElementById(square).style.border = "0.1px solid black";
}
