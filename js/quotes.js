const newQuote = document.querySelector('#new-quote')
const displayQuote = document.querySelector('#display-quote')

newQuote.addEventListener('click', () => {
  randomQuote()
})

var quotes = [
  '\"Be yourself; everyone else is already taken.\" \― Oscar Wilde',
  '\“Be the change that you wish to see in the world.\” \― Mahatma Gandhi',
  '\"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.\" \― Bernard M. Baruch',
  '\“Without music, life would be a mistake.\” \― Friedrich Nietzsche, Twilight of the Idols'
]

const randomQuote = () => {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  displayQuote.innerHTML = quotes[randomNumber];
}