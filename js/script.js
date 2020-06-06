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

const quotes = [
  {
    quote: 'Among bright stars, I’m lost. There’s a new tide. And all the forgotten faces, all the forgotten children, we seek the great forgotten language…',
    source: 'Samuel T. Anders',
    citation: 'Battlestar Galactica',
    year: '2006',
  },
  {
    quote: "You can learn all the math in the 'verse, but you take a boat in the air you don't love, she'll shake you off just as sure as the turning of the worlds. Love keeps her in the air when she oughtta fall down, tells you she's hurting 'fore she keens.",
    source: 'Malcolm Reynolds',
    citation: 'Serenity',
    year: '2005',
  }
  {
    quote: 'We Created You. Us. It Was A Stupid, Frakked-Up Decision, And We Have Paid For It.',
    source: 'Kara Thrace',
    citation: 'Battlestar Galactica(2004)',
    year: '2005',
  }
  {
    quote: 'Look at this. It’s worthless — ten dollars from a vendor in the street. But I take it, I bury it in the sand for a thousand years, it becomes priceless. Like the Ark.',
    source: 'Harrison Ford',
    citation: 'Indiana Jones',
    year: '1981',
  }
  {
    quote: 'Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean?',
    source: 'Marty McFly',
    citation: 'Back to the Future Part 1',
    year: '1985',
  }
  {
    quote: '“Keep your friends close, but your enemies closer.',
    source: 'Al Pacino',
    citation: 'The Godfather part 2',
    year: '1974',
  }
  {
    quote: "There's no crying in baseball!",
    source: 'Tom Hanks',
    citation: 'A league of their own',
    year: '1992',
  }
]

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);