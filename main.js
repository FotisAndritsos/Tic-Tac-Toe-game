const tBlocks = document.querySelectorAll(".t-blocks");
const whoWon = document.querySelector(".who-won");



const xNiaou = "niaou";
const oGav = "gav";
const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let xPlayer = true;

const handleClick = (e) => {{
    const cell = e.target;
    const currentClass = xPlayer ? xNiaou : oGav;
    placeMark(cell, currentClass);
    if (getWinner(currentClass)){
      endGame(currentClass);
    } else{
      console.log("try againnnnn!!")
    }
    tTurn();
  }
};

const tTurn = () => {
  xPlayer = !xPlayer;
};
 
const placeMark = (cell, currentClass) =>{  
  cell.classList.add(currentClass);
}

const getWinner = (currentClass) => {
  return winPositions.some( pos => {
    return pos.every(index => {
      return tBlocks[index].classList.contains(currentClass);
    });
  });
};

const endGame = (currentClass) => {
  if (currentClass === xNiaou) {
   whoWon.innerHTML = "X Player WINS!!!"
   tBlocks.forEach((block) => {
     block.removeEventListener("click", handleClick, { once: true });
   });
  } else {
    whoWon.innerHTML = "O Player WINS!!!";
    tBlocks.forEach((block) => {
      block.removeEventListener("click", handleClick, { once: true });
    });
  }
};

tBlocks.forEach((block) => {
  block.addEventListener("click", handleClick, { once: true });
});
