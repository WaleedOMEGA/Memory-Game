document.addEventListener('DOMContentLoaded', () => {
    // all cards
    //card options
    const cardArray = [
        {
            name: 'baloon',
            img: 'images/baloon.png'
        },
        {
            name: 'bike',
            img: 'images/bike.png'
        },
        {
            name: 'boat',
            img: 'images/boat.png'
        },
        {
            name: 'car',
            img: 'images/car.png'
        },
        {
            name: 'mbike',
            img: 'images/mbike.png'
        },
        {
            name: 'plane',
            img: 'images/plane.png'
        },
        {
            name: 'baloon',
            img: 'images/baloon.png'
        },
        {
            name: 'bike',
            img: 'images/bike.png'
        },
        {
            name: 'boat',
            img: 'images/boat.png'
        },
        {
            name: 'car',
            img: 'images/car.png'
        },
        {
            name: 'mbike',
            img: 'images/mbike.png'
        },
        {
            name: 'plane',
            img: 'images/plane.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    const cardsWon = [];

    //check for matches
  const checkForMatch=()=> {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length.toString()
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

    //flip your card
    const flipCard = (e) => {
        let cardId = e.currentTarget.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        e.currentTarget.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    };

    //create your board
    const createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i.toString());
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };


    createBoard();
});