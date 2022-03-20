// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Fourscore and seven years ago our fathers brought forth on this
continent a new nation conceived in liberty and dedicated to the proposition
that all men are created equal Now we are engaged in a great civil war testing
whether that nation or any nation so conceived and so dedicated can long
endure We are met on a great battle field of that war We have come to dedicate
a portion of that field as a final resting place for those who here gave their
lives that that nation might live It is altogether fitting and proper that we
should do this But in a larger sense we cannot dedicate we cannot
consecrate we cannot hallow this ground. The brave men living and dead who
struggled here have consecrated it far above our poor power to add or detract
The world will little note nor long remember what we say here but it can never
forget what they did here It is for us the living rather to be dedicated here
to the unfinished work which they who fought here have thus far so nobly
advanced It is rather for us to be here dedicated to the great task remaining
before us that from these honored dead we take increased devotion to that cause
for which they here gave the last full measure of devotion that we here highly
resolve that these dead shall not have died in vain that this nation under God
shall have a new birth of freedom and that government of the people by the
people for the people shall not perish from the earth`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords(5) {
  const longWordsElement = document.getElementById('long-words');
function displayShortWords(4) {
  const shortWordsElements = document.getElementById('short-words');
}

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}
let words = ['proposition''portion''place''proper''poor''power''people''perish'];

document.write('<h1>Words that start with P</h1>')
document.write('<ul>')

for(let words of words) {
  if(animal.startsWith('k')) {
    document.write('<li>');
    document.write(Words)
    document.write('</li>')
  }
}

document.write('</ul>');
// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  let longest word = ['proposition'];

let longestWord = longest word[0];

for(let i = 1; i < animals.length; i++) {
  if(animals[i].length > longestWord.length) {
    longestWord = animals[i];
  }
}

document.write('Longest word: ' + longestWord);

  // TODO: Call your functions here!
}
