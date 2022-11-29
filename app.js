

const resetGameState = () =>{
  state.board = 
       [
          [null, null, null],
          [null, null, null],
          [null, null, null],
          ];
          state.players = ['X', 'O']
          state.currentPlayer = state.players[0]
          
          const cells = document.querySelectorAll('.cell')
    startGame();
    const winConditions =
    [
      [0, 1, 2]
      [3, 4, 5]
      [6, 7 ,8]
      [0, 3, 6]
      [1, 4, 7]
      [2, 5, 8]
      [0, 4, 8]
      [6, 4, 2]
    ]
  
          

}
// *************** DOM SELECTORS ***************
 const boardElem = document.querySelector('#board');

 const playerTurnElem = document.querySelector('#player-turn');

// ***************Game Logic **********//

const turnCard = () => {
  for (let i=0; i < state.length; i++){
    let card = state.board[i]
    card.isTurned = false;
  }
};

const changeTurn = () => {
  checkBoard();
  // switch players
  setTimeout(() => {
    state.lastTurnedIdx = -1;
    state.currentPlayerIdx = Math.abs(state.currentPlayerIdx - 1);

    render();
  }, 1000);
  };


// *************** DOM MANIPULATION FUNCTIONS ***************

 const renderBoard = () => {
  // iterate through the state.board

  for (let i = 0; i < state.board.length; i++) {
      const card = state.board[i];

      // create elements
    const cellElem = document.createElement('div');
    cellElem.classList.add('cell');

  if (card.isTurned) cellElem.innerText = card.value;
       cellElem.innerText = card;
 cellElem.dataset.index = i;
 console.log('card is : ${card}');

  // append them to the parent element
  
  
}
 boardElem.appendChild(cellElem);

};
  

// *************** EVENT LISTENERS ***************
boardElem.addEventListener('click', (event) =>{
  if (event.target.classnName!== 'cell')return;
  const cellIdx = (event.target.dataset.index);
  console.dir(event.target.dataset);
  takeTurn(cellIdx);
  checkBoard();
  render();
});

//console.log('addEventListener')
playerTurnElem.addEventListener('click', (event) => {
  console.log('this is the event from playerTurnElem', event.target);
  if (event.target.className === 'restart') {
    resetState();
    render();
  } else if (event.target.className === 'start') {
    // get the input of player1
    const player1Input = document.querySelector('input[name=player1]');
    // get the value from the input
    const player1 = player1Input.value;
    state.players[0] = player1Value;
    //  Do the same thing for player2
    const player2Input = document.querySelector('input[name=player2]');
    // get the value from the input
    const playerValue = player2Input.value;
    state.players[1] = player2Value;
    render();
  }
});

// *************** BOOTSTRAPPING ***************

 resetState();
 renderBoard();
// console.log(state.board.length);
// console.log(state);


