document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
      {
        name: 'elmo',
        img: 'images/elmo.png'
      },
      {
        name: 'diamante',
        img: 'images/diamante.png'
      },
      {
        name: 'pala',
        img: 'images/pala.png'
      },
      {
        name: 'oro',
        img: 'images/oro.png'
      },
      {
        name: 'spada',
        img: 'images/spada.png'
      },
      {
        name: 'pelle',
        img: 'images/pelle.png'
      },
      {
        name: 'cuore',
        img: 'images/cuore.png'
      },
      {
        name: 'oca',
        img: 'images/oca.png'
      },
      {
        name: 'doggo',
        img: 'images/doggo.png'
      },
      {
        name: 'elmo',
        img: 'images/elmo.png'
      },
      {
        name: 'diamante',
        img: 'images/diamante.png'
      },
      {
        name: 'pala',
        img: 'images/pala.png'
      },
      {
        name: 'oro',
        img: 'images/oro.png'
      },
      {
        name: 'spada',
        img: 'images/spada.png'
      },
      {
        name: 'pelle',
        img: 'images/pelle.png'
      },
      {
        name: 'cuore',
        img: 'images/cuore.png'
      },
      {
        name: 'oca',
        img: 'images/oca.png'
      },
      {
        name: 'doggo',
        img: 'images/doggo.png'
      }
  
  ]
  
  cardArray.sort(() => 0.5 - Math.random())
  
  const tabella = document.querySelector('.tabella')
  const messaggioVittoria = document.querySelector('#risultato')
  let cardsChosen = []
  //questo array serve per quando scegli le carte
  //sarà sempre di lunghezza 2 (posizione 0 e 1)
  let cardsChosenId = []
  let cardsWon = []
  
  //crea la board
  function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'images/minecraft.png')
          card.setAttribute('data-id', i)
          //a ogni click flippa la carta
          card.addEventListener('click', flipCard)
          //a ogni click conta le mosse
          card.addEventListener('click', countMoves)
          //man mano che creiamo le carte col ciclo for le inseriamo nella tabella
          tabella.appendChild(card)
      }
  }
  
  function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
  
      //Se clicchi la stessa identica carta
      if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/minecraft.png')
          cards[optionTwoId].setAttribute('src', 'images/minecraft.png')
          document.getElementById('messaggio').innerHTML = 'Hai cliccato la stessa immagine, genio!'
        }
        //Se trovi due carte uguali
        else if (cardsChosen[0] === cardsChosen[1]) {
          document.getElementById('messaggio').innerHTML = 'Hai trovato una coppia, incredibile!'
          cards[optionOneId].setAttribute('src', 'images/creeper.png')
          cards[optionTwoId].setAttribute('src', 'images/creeper.png')
          //visto che le hai azzeccate, le due carte se le clicchi non si girano più
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'images/minecraft.png')
          cards[optionTwoId].setAttribute('src', 'images/minecraft.png')
          document.getElementById('messaggio').innerHTML = 'Prova di nuovo, campione :D'
          
        }
        cardsChosen = []
        cardsChosenId = []
        //qua la lunghezza di cardArray sarà per forza diviso 2
        //perché se ne hai trovate metà, hai trovato anche l'altra metà(?)
        if (cardsWon.length === cardArray.length/2) {
          //qui fa vedere questa scritta nel momento in cui tu hai vinto
          messaggioVittoria.textContent = 'Wow, le hai trovate tutte!'
          document.getElementById('messaggio').innerHTML = "";
          //reset timer
          var timer = document.querySelector('.timer');
          timer.innerHTML = minute+" min " + second+" sec";
          clearInterval(interval);
        }
  }
  
  function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    let moves = 0
    let contatoreMosse = document.querySelector('#mosse')
  
    function countMoves() {
      moves++
      contatoreMosse.innerHTML = moves
  
      if(moves == 1) {
        second = 1;
        minute = 0; 
        hour = 0;
        startTimer();
      }
    }
  
  var second = 0, minute = 0; hour = 0;
  var timer = document.querySelector('.timer');
  var interval;
  function startTimer(){
      interval = setInterval(function(){
          timer.innerHTML = minute+" min "+second+" sec";
          second++;
          if(second == 60){
              minute++;
              second=0;
          }
          if(minute == 60){
              hour++;
              minute = 0;
          }
      },1000);
  }
  
    createBoard()
  
  })