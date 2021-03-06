document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
          name: "batman",
          img: "images/batman.png",
        },
        {
          name: "batman",
          img: "images/batman.png",
        },
        {
          name: "captain america",
          img: "images/captain america.png",
        },
        {
          name: "captain america",
          img: "images/captain america.png",
        },
        {
          name: "ironman",
          img: "images/ironman.png",
        },
        {
          name: "ironman",
          img: "images/ironman.png",
        },
        {
          name: "minion",
          img: "images/minion.png",
        },
        {
          name: "minion",
          img: "images/minion.png",
        },
        {
          name: "superman",
          img: "images/superman.png",
        },
        {
          name: "superman",
          img: "images/superman.png",
        },
        {
          name: "thor",
          img: "images/thor.png",
        },
        {
          name: "thor",
          img: "images/thor.png",
        },
      ];
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/background.png')
        cards[optionTwoId].setAttribute('src', 'images/background.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/background.png')
        cards[optionTwoId].setAttribute('src', 'images/background.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })