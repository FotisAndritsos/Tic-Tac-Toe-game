const tBlocks = document.querySelectorAll(".t-blocks");

let xPlayer = true;
let oPlayer = false;

tBlocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    blockTarg = e.target;
    let indxTarger = [...blockTarg.parentElement.children].indexOf(blockTarg);

    if (xPlayer) {
      if (blockTarg.hasChildNodes()) {
        return;
      } else {
        const act = document.createElement("div");
        act.classList.add("niaou");
        act.innerHTML = "X";
        blockTarg.appendChild(act);
        
        xPlayer = false;
        oPlayer = true;
        checkWin(tBlocks, indxTarger);
      }
    } else {
      if (blockTarg.hasChildNodes()) {
        return;
      } else {
        const act = document.createElement("div");
        act.classList.add("gav");
        act.innerHTML = "O";
        blockTarg.appendChild(act);
        // checkWin(indxTarger);
        xPlayer = true;
        oPlayer = false;
      }
    }
  });
});
const checkWin = (pos, inx) => {
  const fook = pos[inx].children;
  const xook = pos[inx + 1].children;
  const oook = pos[inx - 1].children;
  // console.log(fook);
  // console.log(xook);
  // console.log(oook);

  let p;
  for (p = 0; p < fook.length; p++) {
    if (fook[p].classList.contains("niaou")) {
      if (
        xook[p].classList.contains("niaou") ||
        oook[p].classList.contains("niaou")
      ) {
        console.log("WIINNNNN");
      } else {
        return;
      }
    } else {
      return;
    }
  }
};
