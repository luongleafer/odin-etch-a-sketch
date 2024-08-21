const boardDiv = document.querySelector(".board");
let boardSize = 16;
for (let i = 0; i<boardSize; i++){
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j< boardSize; j++){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");

        //newCell.style.width = `${Math.floor(100/boardSize)}%`;
        //newCell.style.height = `${Math.floor(100/boardSize)}%`;
        //boardDiv.appendChild(newCell);
        newRow.appendChild(newCell);
    }
    boardDiv.appendChild(newRow);
}

function getRandomValue(min, max){
    return min + Math.floor(Math.random() * max);
}

function paint(element){
    const red = getRandomValue(0,255);
    const green = getRandomValue(0,255);
    const blue = getRandomValue(0,255);
    element.style.backgroundColor = `rgb(${red},${green},${blue})`;
    if(Number(element.style.opacity) < 1){
        element.style.opacity = Number(element.style.opacity) +  0.1;
    }
}

function clearBoard(){
    const allCell = document.querySelectorAll(".cell");
    allCell.forEach((cell)=>{
        cell.style.backgroundColor = "white";
        cell.style.opacity = 0;
    });
}

boardDiv.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("cell")){
        paint(event.target);
    }
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click",clearBoard);
const changeBtn = document.querySelector("#change-btn");
changeBtn.addEventListener("click",askForBoardSize);

function askForBoardSize(){
    let msg = ""
    do{
        msg = prompt("Enter new board size (1-100)");
    }
    while(!Number(msg) || Number(msg)<1 || Number(msg) > 100);
    boardSize = Number(msg); 
    fillBoard();
}

function fillBoard(){
    const all = document.querySelectorAll(".board *");
    all.forEach(
        (div) => {
            div.remove();
        }
    );
    for (let i = 0; i<boardSize; i++){
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let j = 0; j< boardSize; j++){
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
        }
        boardDiv.appendChild(newRow);
    }
}

