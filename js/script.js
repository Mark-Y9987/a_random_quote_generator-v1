/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Variable containing an array of object literals that include quotes, sources, citations, and the years they were spoken.
 ***/

const quotes = [
  {
    quote:
      "Among bright stars, I’m lost. There’s a new tide. And all the forgotten faces, all the forgotten children, we seek the great forgotten language…",
    source: "Samuel T. Anders",
    citation: "Battlestar Galactica",
    year: "2006",
    genre: "Science Fiction",
  },
  {
    quote:
      "You can learn all the math in the 'verse, but you take a boat in the air you don't love, she'll shake you off just as sure as the turning of the worlds. Love keeps her in the air when she oughtta fall down, tells you she's hurting 'fore she keens.",
    source: "Malcolm Reynolds",
    citation: "Serenity",
    year: "2005",
    genre: "Science Fiction",
  },
  {
    quote:
      "We Created You. Us. It Was A Stupid, Frakked-Up Decision, And We Have Paid For It.",
    source: "Kara Thrace",
    citation: "Battlestar Galactica(2004)",
    year: "2005",
    genre: "Science Fiction",
  },
  {
    quote:
      "Look at this. It’s worthless — ten dollars from a vendor in the street. But I take it, I bury it in the sand for a thousand years, it becomes priceless. Like the Ark.",
    source: "Indiana Jones",
    citation: "Raiders of the Lost Ark",
    year: "1981",
    genre: "Action/Adventure",
  },
  {
    quote:
      "Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean?",
    source: "Marty McFly",
    citation: "Back to the Future Part 1",
    year: "1985",
    genre: "Science Fiction",
  },
  {
    quote: "“Keep your friends close, but your enemies closer.",
    source: "Al Pacino",
    citation: "The Godfather part 2",
    year: "1974",
    genre: "Crime Drama",
  },
  {
    quote: "There's no crying in baseball!",
    source: "Tom Hanks",
    citation: "A league of their own",
    year: "1992",
    genre: "Sports/Comedy",
  },
  {
    quote: "Every man loves justice at another man's expense.",
    source: "Anonymous",
  },
];

/***
 * Generates a random number within the range equal to the length of the 'quotes' array,
 * then assigns that random number to the index value of the array to return a random quote.
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * Generates a random background color
 */

function randomRGB() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  let randBackground = (document.body.style.background = bgColor);
  return randBackground;
}

/***
 * Stores the value returned from the getRandomQuote() function, then writes the key values to the DOM
 ***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `<p class = "quote">${quote.quote}</p>`;
  html += `<p class = "source">${quote.source}`;
  if ("citation" in quote) {
    html += `<span class = "citation">${quote.citation}</span>`;
  }
  if ("year" in quote) {
    html += `<span class = "year">${quote.year}</span>`;
  }
  if ("genre" in quote) {
    html += `<span class = "genre">${quote.genre}</span>`;
  }
  html += `</p>`;
  let printedQuote = (document.getElementById("quote-box").innerHTML = html);
  randomRGB(); //randomly change the background color of the DOM
  setInterval(function () {
    location.reload();
  }, 15000); //refresh the page every 15 seconds
  return printedQuote;
}
// call the function

printQuote();

/***
 * event listener to update the DOM with a randomized quote
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
