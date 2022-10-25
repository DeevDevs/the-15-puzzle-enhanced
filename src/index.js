import "./styles/main.scss";
import clickTrack from "./assets/click.wav";
import faviconPic from "./assets/favicon.png";

///////////////////////////////////////////////
/////////////////////////// INITIAL VARIABLES ////////////////////////////////////

let gamebox;
let gameState = null;
let clickSound;
let overlay;
let turnsString;
let timer;
let btnLastGame;
let btnStartGame;
let btnSaveGame;
let btnScoreboard;
let btnCloseScoreboard;
let chooseParameterGrid;
let btnChooseParameter;
let btnCloseChooseParameter;
let btnSaveName;
let btnYes;
let btnNo;
let btnMute;
let turns = 0;
let hourCounter = 0;
let emptybox;
let timeoutFunction;
let dialogueWindowTimerFunction;
let ghostTimeout;
let ghostDeleteTimeout;
let chosenParameter = 16;
//prettier-ignore
let initialArrayOfChosenParameter = [[2, 5],[1, 3, 6],[2, 4, 7],[3, 8], [1, 6, 9], [2, 5, 7, 10], [3, 6, 8, 11], [4, 7, 12], [5, 10, 13], [6, 9, 11, 14], [7, 10, 12, 15], [8, 11, 16], [9, 14], [10, 13, 15], [11, 14, 16], [12, 15],
];
//prettier-ignore
let correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

///////////////////////////////////////////////
/////////////////////////// CREATING VARIABLES ////////////////////////////////////
const correctOrder3x = [];
createArrayForComparison(correctOrder3x, 9);
const correctOrder4x = [];
createArrayForComparison(correctOrder4x, 16);
const correctOrder5x = [];
createArrayForComparison(correctOrder5x, 25);
const correctOrder6x = [];
createArrayForComparison(correctOrder6x, 36);
const correctOrder7x = [];
createArrayForComparison(correctOrder7x, 49);
const correctOrder8x = [];
createArrayForComparison(correctOrder8x, 64);

initialArrayOfChosenParameter = correctOrder4x;
//prettier-ignore
let checkMoveAllowed = [[2, 5],[1, 3, 6],[2, 4, 7],[3, 8], [1, 6, 9], [2, 5, 7, 10], [3, 6, 8, 11], [4, 7, 12], [5, 10, 13], [6, 9, 11, 14], [7, 10, 12, 15], [8, 11, 16], [9, 14], [10, 13, 15], [11, 14, 16], [12, 15],
];
const checkMoveAllowed3x = [];
createArrayCheckAgainst(checkMoveAllowed3x, correctOrder3x);
const checkMoveAllowed4x = [];
createArrayCheckAgainst(checkMoveAllowed4x, correctOrder4x);
const checkMoveAllowed5x = [];
createArrayCheckAgainst(checkMoveAllowed5x, correctOrder5x);
const checkMoveAllowed6x = [];
createArrayCheckAgainst(checkMoveAllowed6x, correctOrder6x);
const checkMoveAllowed7x = [];
createArrayCheckAgainst(checkMoveAllowed7x, correctOrder7x);
const checkMoveAllowed8x = [];
createArrayCheckAgainst(checkMoveAllowed8x, correctOrder8x);

let currentOrder = [];

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO PREPARE/CHECK THE GRID //////////////////////////////////

function createArrayForComparison(targetArray, num) {
  let curArr,
    l = -1,
    breakNum = [],
    int = 1;
  while (int < num) {
    breakNum.push(int);
    int += Math.sqrt(num);
  }
  for (let i = 1; i < num + 1; i++) {
    if (breakNum.includes(i)) {
      targetArray.push([]);
      l++;
      curArr = targetArray[l];
    }
    curArr.push(i);
  }
}

function createArrayCheckAgainst(targetArray, suppArray) {
  let lengthOfOneLine = suppArray[1].length;
  let counter = -1;
  for (let i = 0; i < lengthOfOneLine; i++) {
    for (let j = 0; j < lengthOfOneLine; j++) {
      targetArray.push([]);
      counter++;
      if (suppArray[i][j - 1]) targetArray[counter].push(suppArray[i][j - 1]);
      if (suppArray[i][j + 1]) targetArray[counter].push(suppArray[i][j + 1]);
      if (suppArray[i - 1]) targetArray[counter].push(suppArray[i - 1][j]);
      if (suppArray[i + 1]) targetArray[counter].push(suppArray[i + 1][j]);
    }
  }
}

function shuffleOrder(chosenParam) {
  currentOrder = [];
  while (correctOrder.length !== currentOrder.length) {
    let num;
    num = correctOrder[Math.floor(Math.random() * chosenParam)];
    if (currentOrder.includes(num)) continue;
    currentOrder.push(num);
  }
}

let arrToCheckX4 = [4, 5, 6, 7, 12, 13, 14, 15];
//prettier-ignore
let arrToCheckX6 = [6, 7, 8, 9, 10, 11, 18, 19, 20, 21, 22, 23, 30, 31, 32, 33, 34, 35];
// prettier-ignore
let arrToCheckX8 = [ 8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63];

function checkIfPossible(chosenParam) {
  let result = 0;
  for (let i = 0; i < currentOrder.length - 1; i++) {
    if (currentOrder[i] === chosenParam) {
      continue;
    }
    let num = currentOrder[i];
    for (let j = i + 1; j < currentOrder.length; j++) {
      if (currentOrder[j] === chosenParam) {
        continue;
      }
      if (num > currentOrder[j]) {
        result++;
      }
    }
  }
  if ([4, 6, 8].includes(Math.sqrt(chosenParam))) {
    if (result % 2 === 1) {
      if (
        Math.sqrt(chosenParam) === 4 &&
        !arrToCheckX4.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else if (
        Math.sqrt(chosenParam) === 6 &&
        !arrToCheckX6.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else if (
        Math.sqrt(chosenParam) === 8 &&
        !arrToCheckX8.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else {
        shuffleOrder(chosenParam);
        return checkIfPossible(chosenParam);
      }
    } else if (result % 2 === 0) {
      if (
        Math.sqrt(chosenParam) === 4 &&
        arrToCheckX4.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else if (
        Math.sqrt(chosenParam) === 6 &&
        arrToCheckX6.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else if (
        Math.sqrt(chosenParam) === 8 &&
        arrToCheckX8.includes(currentOrder.indexOf(chosenParam))
      ) {
        return;
      } else {
        shuffleOrder(chosenParam);
        return checkIfPossible(chosenParam);
      }
    }
  } else {
    if (result % 2 === 1) {
      shuffleOrder(chosenParam);
      return checkIfPossible(chosenParam);
    } else {
      return;
    }
  }
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO ADD ELEMENTS //////////////////////////////////
function addNameAndControls() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<audio src="./click.wav" class="click-sound hidden"></audio>
    <div class="dialogue-window">
      Welcome to Gem Puzzle Game, 
    </div>
    <div class="offer-saved-game">
      <div class="offer-saved-game-question">
        Do you want to continue the last saved game?
      </div>
      <div class="offer-saved-game-name">Your name: Some Name Here</div>
      <div class="offer-saved-game-btns">
        <button class="agree-btn btn-yes">Yes</button> <button class="agree-btn btn-no">No</button>
      </div>
    </div>
    <form class="enter-name-field">
      <div class="enter-name-header">What is your name?</div>
      <input
        class="enter-name-input"
        type="text"
        maxlength="9"
        placeholder="Enter your name here"
        id="name"
        required
      />
      <button class="btn-enter-name" type="submit" for="name">Save</button>
    </form>
    <div class="chosen-param-module hidden">
      <button class="btn-close-param-module">
        <span class="span-one"></span>
        <span class="span-two"></span>
      </button>
      <h1>Choose The Grid</h1>
      <div class="chosen-param-module__grid">
        <div class="chosen-param-div" data-par="9">3 x 3</div>
        <div class="chosen-param-div" data-par="16">4 x 4</div>
        <div class="chosen-param-div" data-par="25">5 x 5</div>
        <div class="chosen-param-div" data-par="36">6 x 6</div>
        <div class="chosen-param-div" data-par="49">7 x 7</div>
        <div class="chosen-param-div" data-par="64">8 x 8</div>
      </div>
    </div>
    <div class="overlay"></div>
    <div class="scoreboard hidden">
      <button class="btn-close-scoreboard">
        <span class="span-one"></span>
        <span class="span-two"></span>
      </button>
      <h2>BEST PLAYERS (sorted by Time)</h2> 
      <div class="scoreboard__categories">
        <span class="scoreboard__category">Name</span>
        <span class="scoreboard__category">Time</span>
        <span class="scoreboard__category">Moves</span>
      </div>
    </div>
    <div class="game-name"><h1>Gem Puzzle</h1></div>
    <section class="control-box">
      <div class="control-box__buttons">
        <div class="control-box__box btn-start-game-box">
          <button class="control-box-btn btn-start-game">New Game</button>
        </div>
        <div class="control-box__box btn-playsaved-game-box">
          <button class="control-box-btn btn-playsaved-game">Last Game</button>
        </div>
        <div class="control-box__box btn-save-game-box">
          <button class="control-box-btn btn-save-game">Save Game</button>
        </div>
      </div>
      <div class="control-box__buttons-two">
        <div class="control-box__box btn-see-scoreboard-box">
          <button class="control-box-btn btn-see-scoreboard">Scoreboard</button>
        </div>
        <div class="control-box__box btn-choose-grid-box">
          <button class="control-box-btn btn-choose-grid">Parameters</button>
        </div>
        <div class="control-box__box btn-sound-box">
        <button class="control-box-btn btn-sound">Unmute</button>
      </div>
      </div>
      <div class="control-box__game-progress">
        <div class="player-name game-progress-box">
          <span class="player-name-string">Player: Unknown</span>
        </div>
        <div class="timer game-progress-box">
          <span class="timer-string">Timer: 0:00:00</span>
        </div>
        <div class="turns game-progress-box">
          <span class="turns-string">Turns: 0</span>
        </div>
      </div>
    </section>`
  );
  btnCloseChooseParameter = document.querySelector(".btn-close-param-module");
  btnCloseChooseParameter.addEventListener("click", () => {
    toggleWindow(".chosen-param-module");
    if (gameState === null) {
      startTimer();
      gameState = true;
    }
  });
}

function addTilesToPlay(bool = false) {
  let boxVariation = currentOrder
    .map((el, i) => generateTile(el, i + 1))
    .join("");
  if (!bool) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<section class="game-box">${boxVariation}</section>`
    );
    emptybox = document.querySelector(".game-box__empty-box");
    return;
  } else {
    gamebox.innerHTML = "";
    gamebox.insertAdjacentHTML("afterbegin", boxVariation);
    emptybox = document.querySelector(".game-box__empty-box");
    return;
  }
}

function generateTile(tileNum, tilePos) {
  return `<div draggable="true" 
              class="game-box__${
                tileNum !== chosenParameter ? `number-box` : "empty-box"
              }"
              data-num="${tileNum}"
              ${tileNum !== chosenParameter ? `id="num-${tileNum}"` : ""}
              style="grid-area:f${tilePos}f / f${tilePos}f / f${tilePos}f / f${tilePos}f"
          >
            ${tileNum !== chosenParameter ? tileNum : ""}
          </div>`;
}

function addScoresData(arrOfScores) {
  if (!arrOfScores) {
    btnCloseScoreboard = document.querySelector(".btn-close-scoreboard");
    btnCloseScoreboard.addEventListener("click", () => {
      toggleWindow(".scoreboard");
    });
    return;
  }
  let sortedArr = arrOfScores
    .map((el) => {
      let ttlTime =
        +el.time.slice(0, 1) * 60 * 60 +
        +el.time.slice(2, 4) * 60 +
        +el.time.slice(5, 7);
      el.time = ttlTime;
      return el;
    })
    .sort((a, b) => a.time - b.time)
    .map((el) => {
      let hours = el.time / 60 / 60;
      let minutes = el.time / 60;
      let seconds =
        el.time - Math.trunc(hours) * 60 * 60 - Math.trunc(minutes) * 60;
      el.time = `${Math.trunc(hours)}:${
        String(Math.trunc(minutes)).length === 2
          ? Math.trunc(minutes)
          : `0${Math.trunc(minutes)}`
      }:${
        String(Math.trunc(seconds)).length === 2
          ? Math.trunc(seconds)
          : `0${Math.trunc(seconds)}`
      }`;
      return el;
    });
  let newArrOfScores;
  sortedArr.length > 10
    ? (newArrOfScores = sortedArr.splice(0, 10))
    : (newArrOfScores = sortedArr);
  localStorage.setItem("gmPzzlScrsDvDvs", JSON.stringify(newArrOfScores));
  let scores = newArrOfScores.map((el) => generateLocalScore(el)).join("");
  document.querySelector(".scoreboard").innerHTML = "";
  document.querySelector(".scoreboard").insertAdjacentHTML(
    "afterbegin",
    `<button class="btn-close-scoreboard">
      <span class="span-one"></span>
      <span class="span-two"></span>
    </button>
    <h2>BEST PLAYERS (sorted by Time)</h2> 
      <div class="scoreboard__categories">
        <span class="scoreboard__category">Name</span>
        <span class="scoreboard__category">Time</span>
        <span class="scoreboard__category">Moves</span>
        <span class="scoreboard__category">Parameters</span>
      </div> ${scores}`
  );
  btnCloseScoreboard = document.querySelector(".btn-close-scoreboard");
  btnCloseScoreboard.addEventListener("click", () => {
    toggleWindow(".scoreboard");
  });
}

function generateLocalScore(localScore) {
  return `
    <div class="scoreboard__record">
      <span class="scoreboard__record-detail">${localScore.playerName}</span>
      <span class="scoreboard__record-detail">${localScore.time}</span>
      <span class="scoreboard__record-detail">${localScore.turns}</span>
      <span class="scoreboard__record-detail">${localScore.type}</span>
    </div>`;
}

function animateTransition(thisElemNum, emptyOne, thisElem) {
  if (+thisElemNum < +emptyOne && +emptyOne - +thisElemNum > 1) {
    thisElem.style.visibility = "hidden";
    let createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(() => {
      createdElem.style.transform = `translateY(calc(100% - 4px))`;
    }, 50);
    ghostDeleteTimeout = setTimeout(() => {
      createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum < +emptyOne && +emptyOne - +thisElemNum === 1) {
    thisElem.style.visibility = "hidden";
    let createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(() => {
      createdElem.style.transform = `translateX(calc(100% - 4px))`;
    }, 50);
    ghostDeleteTimeout = setTimeout(() => {
      createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum > +emptyOne && +thisElemNum - +emptyOne === 1) {
    thisElem.style.visibility = "hidden";
    let createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(() => {
      createdElem.style.transform = `translateX(calc(-100% - 4px))`;
    }, 50);
    ghostDeleteTimeout = setTimeout(() => {
      createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
  if (+thisElemNum > +emptyOne && +thisElemNum - +emptyOne > 1) {
    thisElem.style.visibility = "hidden";
    let createdElem = createGhostBox(thisElem);
    ghostTimeout = setTimeout(() => {
      createdElem.style.transform = `translateY(calc(-100% - 4px))`;
    }, 50);
    ghostDeleteTimeout = setTimeout(() => {
      createdElem.remove();
      thisElem.style.visibility = "visible";
    }, 130);
  }
}

function createGhostBox(elem) {
  let dataObj = elem.getBoundingClientRect();
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="game-box__number-box ghost-box">${elem.dataset.num}</div>`
  );
  let ghost = document.querySelector(".ghost-box");
  ghost.style.position = "fixed";
  ghost.style.top = `${dataObj.top}`;
  ghost.style.left = `${dataObj.left}`;
  ghost.style.width = `${dataObj.width}`;
  ghost.style.height = `${dataObj.height}`;
  ghost.style.transition = `transform 0.07s linear`;
  return ghost;
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS TO PLAY THE GAME //////////////////////////////////

function checkStepAddTurn(e) {
  if (!gameState) {
    displayDialogueWindow("This game is finished. Please, start a new game!");
    return;
  }
  const thisElem = e.target.closest(".game-box__number-box");
  const thisElemGridPosition = parseInt(thisElem.style.gridArea.slice(1, 3));
  const emptyBoxPosition = parseInt(emptybox.style.gridArea.slice(1, 3));
  if (!checkMoveAllowed[thisElemGridPosition - 1].includes(emptyBoxPosition))
    return;
  animateTransition(thisElemGridPosition, emptyBoxPosition, thisElem);
  const thisCellNum = e.target.closest(".game-box__number-box").dataset.num;
  currentOrder.splice(thisElemGridPosition - 1, 1, chosenParameter);
  currentOrder.splice(emptyBoxPosition - 1, 1, +thisCellNum);
  let thisElemArea = thisElem.style.gridArea;
  let emptyBoxArea = emptybox.style.gridArea;
  thisElem.style.gridArea = emptyBoxArea;
  emptybox.style.gridArea = thisElemArea;
  if (JSON.stringify(currentOrder) !== JSON.stringify(correctOrder)) turns++;
  turnsString.textContent = `Turns: ${turns}`;
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder))
    announceGameEnd();
}

function announceGameEnd() {
  localStorage.removeItem("svdGmPzzlGmDvDvs");
  stopTimer();
  let gameResults = {};
  gameResults.playerName = document
    .querySelector(".player-name-string")
    .textContent.slice(8);
  gameResults.time = timer.textContent.slice(7);
  gameResults.turns = turnsString.textContent.slice(7);
  gameResults.type = `${Math.sqrt(chosenParameter)}x${Math.sqrt(
    chosenParameter
  )}`;
  let newScoreboard = JSON.parse(localStorage.getItem("gmPzzlScrsDvDvs"));
  if (!newScoreboard) newScoreboard = [];
  newScoreboard.push(gameResults);
  addScoresData(newScoreboard);
  gamebox.style.backgroundColor = "rgb(5, 176, 119)";
  displayDialogueWindow(
    `Hooray! You solved the puzzle in ${gameResults.time} and ${gameResults.turns} moves!`,
    true
  );
  gameState = false;
}

///////////////////////////////////////////////
//////////////////////////////// FUNCTIONS FOR THE MENU //////////////////////////////////

function addOneSecond() {
  let seconds;
  let minutes;
  if (+timer.textContent.slice(12, 14) === 59) {
    seconds = 0;
    minutes = +timer.textContent.slice(9, 11) + 1;
  }
  if (minutes === 60) {
    hourCounter++;
    minutes = 0;
  }
  if (+timer.textContent.slice(12, 14) < 59) {
    seconds = +timer.textContent.slice(12, 14) + 1;
    minutes = +timer.textContent.slice(9, 11);
  }
  timer.textContent = `Timer: ${hourCounter}:${
    String(minutes).length === 1 ? `0${minutes}` : `${minutes}`
  }:${String(seconds).length === 1 ? `0${seconds}` : `${seconds}`}`;

  timeoutFunction = setTimeout(addOneSecond, 1000);
}

function startTimer(options) {
  if (!options) {
    turns = 0;
    hourCounter = 0;
    timer.textContent = `Timer: 0:00:00`;
    turnsString.textContent = `Turns: 0`;
    timeoutFunction = setTimeout(addOneSecond, 1000);
  } else {
    turns = +options.lastTurns.slice(7);
    hourCounter = +options.lastTimer.slice(7, 8);
    timer.textContent = options.lastTimer;
    turnsString.textContent = options.lastTurns;
    timeoutFunction = setTimeout(addOneSecond, 1000);
  }
}

function stopTimer() {
  clearTimeout(timeoutFunction);
}

function addDragListenersToBoxes() {
  let allBoxes = document.querySelectorAll(".game-box__number-box");
  allBoxes.forEach((el) =>
    el.addEventListener("dragstart", function (e) {
      e.target.style.opacity = "0.3";
      e.dataTransfer.setData("text/plain", e.target.dataset.num);
    })
  );
  allBoxes.forEach((el) =>
    el.addEventListener("dragend", function (e) {
      e.target.style.opacity = "1";
    })
  );
  let emptyBox = document.querySelector(".game-box__empty-box");
  emptyBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  emptyBox.addEventListener("drop", function (e) {
    e.preventDefault();
    let info = e.dataTransfer.getData("text");
    checkDraggedStep(info);
  });
}

function checkDraggedStep(num) {
  if (!gameState) {
    displayDialogueWindow("This game is finished. Please, start a new game!");
    return;
  }
  const thisElem = document.getElementById(`num-${num}`);
  const thisElemGridPosition = parseInt(thisElem.style.gridArea.slice(1, 3));
  const emptyBoxPosition = parseInt(emptybox.style.gridArea.slice(1, 3));
  if (!checkMoveAllowed[thisElemGridPosition - 1].includes(emptyBoxPosition))
    return;
  const thisCellNum = num;
  currentOrder.splice(thisElemGridPosition - 1, 1, chosenParameter);
  currentOrder.splice(emptyBoxPosition - 1, 1, +thisCellNum);
  let thisElemArea = thisElem.style.gridArea;
  let emptyBoxArea = emptybox.style.gridArea;
  thisElem.style.gridArea = emptyBoxArea;
  emptybox.style.gridArea = thisElemArea;
  if (JSON.stringify(currentOrder) !== JSON.stringify(correctOrder)) turns++;
  turnsString.textContent = `Turns: ${turns}`;
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder))
    announceGameEnd();
}

function startNewGame() {
  stopTimer();
  shuffleOrder(chosenParameter);
  checkIfPossible(chosenParameter);
  addTilesToPlay(true);
  startTimer();
  displayDialogueWindow(`New game started! Good luck!`);
  gameState = true;
  gamebox.style.backgroundColor = "rgb(180, 254, 229)";
  addDragListenersToBoxes();
}

function saveThisGame() {
  if (!gameState) {
    displayDialogueWindow(`Nothing to save. This game is finished!`);
    return;
  }
  let savedParams = {
    lastOrder: currentOrder,
    lastTimer: timer.textContent,
    lastTurns: turnsString.textContent,
    lastParameter: chosenParameter,
    lastPlayerName: document
      .querySelector(".player-name-string")
      .textContent.slice(8),
  };
  localStorage.setItem("svdGmPzzlGmDvDvs", JSON.stringify(savedParams));
  displayDialogueWindow(`Your game was saved!`);
}

function continueLastGame() {
  if (!localStorage.getItem("svdGmPzzlGmDvDvs")) {
    displayDialogueWindow(`Oops, there are no saved games.`);
    return;
  }
  let savedParams = JSON.parse(localStorage.getItem("svdGmPzzlGmDvDvs"));
  currentOrder = savedParams.lastOrder;
  chosenParameter = savedParams.lastParameter;
  document.querySelector(
    ".player-name-string"
  ).textContent = `Player: ${savedParams.lastPlayerName}`;
  setOrderAndCheckArray(chosenParameter);
  addTilesToPlay(true);
  stopTimer();
  startTimer(savedParams);
  displayDialogueWindow(
    `Welcome, ${savedParams.lastPlayerName}! Game continues.`
  );
  addDragListenersToBoxes();
  gameState = true;
}

function toggleWindow(chosenWindow) {
  if (!document.querySelector(`${chosenWindow}`).classList.contains("hidden")) {
    document.querySelector(`${chosenWindow}`).style.opacity = "0";
    document.querySelector(".overlay").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(`${chosenWindow}`).classList.toggle("hidden");
      document.querySelector(".overlay").classList.toggle("hidden");
    }, 400);
  } else {
    setTimeout(() => {
      document.querySelector(`${chosenWindow}`).style.opacity = "1";
      document.querySelector(".overlay").style.opacity = "1";
    }, 50);
    document.querySelector(`${chosenWindow}`).classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
  }
}

function chooseParameter(num) {
  chosenParameter = num;
  setOrderAndCheckArray(num);
  startNewGame();
}

function setOrderAndCheckArray(num) {
  if (num === 9) {
    gamebox.style.gridTemplateColumns = `repeat(3, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(3, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder3x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
    correctOrder = correctOrder3x.flat();
    checkMoveAllowed = checkMoveAllowed3x;
  }
  if (num === 16) {
    correctOrder = correctOrder4x.flat();
    checkMoveAllowed = checkMoveAllowed4x;
    gamebox.style.gridTemplateColumns = `repeat(4, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(4, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder4x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
  }
  if (num === 25) {
    correctOrder = correctOrder5x.flat();
    checkMoveAllowed = checkMoveAllowed5x;
    gamebox.style.gridTemplateColumns = `repeat(5, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(5, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder5x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
  }
  if (num === 36) {
    correctOrder = correctOrder6x.flat();
    checkMoveAllowed = checkMoveAllowed6x;
    gamebox.style.gridTemplateColumns = `repeat(6, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(6, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder6x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
  }
  if (num === 49) {
    correctOrder = correctOrder7x.flat();
    checkMoveAllowed = checkMoveAllowed7x;
    gamebox.style.gridTemplateColumns = `repeat(7, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(7, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder7x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
  }
  if (num === 64) {
    correctOrder = correctOrder8x.flat();
    checkMoveAllowed = checkMoveAllowed8x;
    gamebox.style.gridTemplateColumns = `repeat(8, 1fr)`;
    gamebox.style.gridTemplateRows = `repeat(8, 1fr)`;
    gamebox.style.gridTemplateAreas = `"${correctOrder8x
      .map((arr) => arr.map((int) => `f${int}f`).join(" "))
      .join(`" "`)}"`;
  }
}

function saveEnteredName() {
  let playerName = document.querySelector(".enter-name-input").value;
  if (!playerName) {
    document.querySelector(".enter-name-input").style.borderColor = "red";
    return;
  }
  document.querySelector(
    ".player-name-string"
  ).textContent = `Player: ${playerName}`;
  document.querySelector(".enter-name-field").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".enter-name-field").classList.add("hidden");
  }, 450);
  document.querySelector(".chosen-param-module").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".chosen-param-module").style.opacity = 1;
  }, 50);
  displayDialogueWindow(`Welcome, ${playerName}!`);
}

function displayDialogueWindow(string, bool) {
  clearTimeout(dialogueWindowTimerFunction);
  let window = document.querySelector(".dialogue-window");
  window.textContent = string;
  window.style.transform = `translateY(0)`;
  window.style.opacity = `1`;
  dialogueWindowTimerFunction = setTimeout(
    () => {
      window.style.transform = `translateY(-2rem)`;
      window.style.opacity = `0`;
    },
    bool ? 2500 : 1500
  );
}

///////////////////////////////////////////////
//////////////////////////////// GAME INITIATION //////////////////////////////////

shuffleOrder(chosenParameter);
checkIfPossible(chosenParameter);

window.addEventListener("load", async function () {
  //add menu buttons and other stuff
  addNameAndControls();
  //preload sounds
  clickSound = document.querySelector(".click-sound");
  clickSound.muted = true;
  //check if there is a saved game... hide 'enter name' field, if there is
  let savedGame = localStorage.getItem("svdGmPzzlGmDvDvs");
  if (!savedGame) {
    document.querySelector(".offer-saved-game").classList.add("hidden");
  } else document.querySelector(".offer-saved-game-name").textContent = `Your name: ${JSON.parse(savedGame).lastPlayerName}`;
  //retreive scoreboard data and render it
  addScoresData(JSON.parse(localStorage.getItem("gmPzzlScrsDvDvs")));
  //render default values for 4x4 game
  addTilesToPlay();

  //add gameplay function listener to the gamebox
  gamebox = document.querySelector(".game-box");
  gamebox.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.closest(".game-box__number-box")) return;
    // if (!gameState) return;
    if (!clickSound.muted && clickSound.paused) {
      clickSound.currentTime = 0;
      clickSound.play();
    } else if (!clickSound.muted) {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.play();
    }
    checkStepAddTurn(e);
  });

  //add other listeners and assign variables
  turnsString = document.querySelector(".turns-string");
  timer = document.querySelector(".timer-string");

  btnStartGame = document.querySelector(".btn-start-game");
  btnStartGame.addEventListener("click", startNewGame);

  btnSaveGame = document.querySelector(".btn-save-game");
  btnSaveGame.addEventListener("click", saveThisGame);

  btnLastGame = document.querySelector(".btn-playsaved-game");
  btnLastGame.addEventListener("click", continueLastGame);

  btnScoreboard = document.querySelector(".btn-see-scoreboard");
  btnScoreboard.addEventListener("click", () => {
    toggleWindow(".scoreboard");
  });

  overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", () => {
    if (
      !document.querySelector(".enter-name-field").classList.contains("hidden")
    )
      return;
    if (!document.querySelector(".scoreboard").classList.contains("hidden"))
      toggleWindow(".scoreboard");
    if (
      !document
        .querySelector(".chosen-param-module")
        .classList.contains("hidden")
    ) {
      toggleWindow(".chosen-param-module");
      if (gameState === null) {
        startTimer();
        gameState = true;
        addDragListenersToBoxes();
      }
    }
  });

  btnSaveName = document.querySelector(".btn-enter-name");
  btnSaveName.addEventListener("click", function (e) {
    e.preventDefault();
    saveEnteredName();
  });

  btnChooseParameter = document.querySelector(".btn-choose-grid");
  btnChooseParameter.addEventListener("click", () => {
    toggleWindow(".chosen-param-module");
  });

  chooseParameterGrid = document.querySelector(".chosen-param-module__grid");
  chooseParameterGrid.addEventListener("click", async (e) => {
    if (!e.target.closest(".chosen-param-div")) return;
    let par = +e.target.closest(".chosen-param-div").dataset.par;
    chooseParameter(par);
    toggleWindow(".chosen-param-module");
  });

  document.querySelector(".btn-no").addEventListener("click", function (e) {
    localStorage.removeItem("svdGmPzzlGmDvDvs");
    document.querySelector(".enter-name-field").classList.remove("hidden");
    document.querySelector(".offer-saved-game").classList.add("hidden");
  });
  document.querySelector(".btn-yes").addEventListener("click", function (e) {
    continueLastGame();
    localStorage.removeItem("svdGmPzzlGmDvDvs");
    toggleWindow(".offer-saved-game");
    document.querySelector(".enter-name-field").classList.add("hidden");
  });

  btnMute = document.querySelector(".btn-sound");
  btnMute.addEventListener("click", function () {
    if (clickSound.muted) {
      btnMute.textContent = "Mute";
      clickSound.muted = false;
      clickSound.play();
    } else {
      btnMute.textContent = "Unmute";
      clickSound.muted = true;
    }
  });
});
