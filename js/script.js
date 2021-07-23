/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    source: "Heraclitus",
    quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man."
  },
  {
    source: "Seneca",
    quote: "Most powerful is he who has himself in his own power.",
    year: "circa 50AD"
  },
  {
    source: "Socrates",
    quote: "The unexamined life is not worth living."
  },
  {
    source: "Patanjali",
    quote: "When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bonds."
  },
  {
    source: "Nagarjuna",
    quote: "Although you may spend your life killing, you will not exhaust all your foes.\
  But if you quell your own anger, your real enemy will be slain." },
  {
    source: "Epicurus",
    quote: "The wealth required by nature is limited and is easy to procure; but the wealth required by vain ideals extends to infinity."
  },
  {
    source: "Hypatia of Alexandria",
    quote: "Life is an unfoldment, and the further we travel the more truth we can comprehend."
  },
  {
    source: "Epictetus",
    quote: "It's not what happens to you, but how you react to it that matters.",
    citation: "Discourses"
  },
  {
    source: "Seneca",
    quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
    year: "circa 50AD"
  },
  {
    source: "Marcus Aurelius",
    quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    citation: "Meditations",
    year: "circa 170CE"
  },
  {
    source: "Confucius",
    quote: "Learning without thought is labor lost; thought without learning is perilous.",
    citation: "The Analects"
  }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {  // a function to output a random quote from an array of quotes
  let length = quotes.length;  // the length of input array
  let randomNum = Math.floor(Math.random() * length) // a random number between 0 and (length-1), used for indexing and accessing the objects in array
  return quotes[randomNum]
}

console.log(getRandomQuote())

/***
 * `printQuote` function
***/

function printQuote() {
  let obj = getRandomQuote();
  let str = `<p class="quote"> ${obj.quote} </p>
        <p class="source"> ${obj.source}`
  if (obj.citation) {
    str += `<span class="citation"> ${obj.citation} </span>`;
  }
  if (obj.year) {
    str += `<span class="year"> ${obj.year} </span>`;
  }
  str += '</p>'
  document.getElementById('quote-box').innerHTML = str;
  return str;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);