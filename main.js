const tBlocks = document.querySelectorAll(".t-blocks");
const whoWon = document.querySelector(".who-won");
const scoreBlock = document.querySelector(".score-block");
const restartBtn = document.querySelector(".restart-btn");

let numTurns = 0;
let xPlayer = true;
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

const gameStart = () => {
  tBlocks.forEach((block) => {
    block.addEventListener("click", handleClick, { once: true });
  });
};

const handleClick = (e) => {
  numTurns++;
  console.log(numTurns);

  const cell = e.target;
  const currentClass = xPlayer ? xNiaou : oGav;
  placeMark(cell, currentClass);
  if (getWinner(currentClass)) {
    endGame(currentClass);
    numTurns=0;
  } else if (!getWinner(currentClass) && numTurns == 9) {
    draw();
    numTurns = 0;
  }
  tTurn();
};

const tTurn = () => {
  xPlayer = !xPlayer;
};
const draw = () => {
  scoreBlock.classList.add("active");
  whoWon.innerHTML = "It's a Draw!!!";
  tBlocks.forEach((block) => {
    block.removeEventListener("click", handleClick, { once: true });
  });
};

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const getWinner = (currentClass) => {
  return winPositions.some((pos) => {
    return pos.every((index) => {
      return tBlocks[index].classList.contains(currentClass);
    });
  });
};

const endGame = (currentClass) => {
  if (currentClass === xNiaou) {
    scoreBlock.classList.add("active");
    whoWon.innerHTML = "X Player WINS!!!";
    tBlocks.forEach((block) => {
      block.removeEventListener("click", handleClick, { once: true });
    });
  } else if (currentClass === oGav) {
    scoreBlock.classList.add("active");
    whoWon.innerHTML = "O Player WINS!!!";
    tBlocks.forEach((block) => {
      block.removeEventListener("click", handleClick, { once: true });
    });
  }
};

restartBtn.addEventListener("click", () => {
  scoreBlock.classList.remove("active");
  tBlocks.forEach((block) => {
    block.classList.remove("niaou", "gav");
  });
  gameStart();
});

gameStart();
