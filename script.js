const boardDiv = document.querySelector(".board");
let boardSize = 100;
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

function paint(element){
    element.style.backgroundColor = "black";
}

function clearBoard(){
    const allCell = document.querySelectorAll(".cell");
    allCell.forEach((cell)=>{
        cell.style.backgroundColor = "white";
    });
}

boardDiv.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("cell")){
        paint(event.target);
    }
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click",clearBoard);
