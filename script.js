//get id
let quote = document.getElementById('quote');
let name = document.getElementById('name');
let date = document.getElementById('date');
let wotd = document.getElementById('wordOfTheDay');
let quote2 = document.getElementById('quote2');
let name2 = document.getElementById('name2');
let date2 = document.getElementById('date2');
//buttons 
const quoteButton = document.querySelector('.generateQuote');
const switchGenerator = document.getElementById('switchGenerator');
const quoteButton2 = document.querySelector('.generateQuote2');
const switchGenerator2 = document.getElementById('switchGenerator2');
const nomNomQuote = document.getElementById('gnnq')
//array for the quotes
const quotes = [
    {
        wordOfTheDay: 'EXCALIBUR',
        name: 'Oliver',
        quote: 'whats wrong with me, why can i never do anything correct',
        date: '4/18/24'
    },
    {
        wordOfTheDay: '??',
        name:'Alex',
        quote:'Texttttt',
        date:'4/18/24'
    }
]
//add functionallity
quoteButton.addEventListener('click', () => {
    // Get a random quote info from the array
    const randomQuoteInfo = Math.floor(Math.random() * quotes.length);
    const randomName = quotes[randomQuoteInfo].name;
    const randomQuote = quotes[randomQuoteInfo].quote;
    const randomDate = quotes[randomQuoteInfo].date;
    const randomWordOfTheDay = quotes[randomQuoteInfo].wordOfTheDay
// Update the text content of the quote element

if(randomName){
    //see if there is a quote alread there
    name.textContent = '';
    name.textContent += randomName
    quote.textContent = '';
    quote.textContent += randomQuote;
    date.textContent = '';
    date.textContent += randomDate;
    wotd.textContent = '';
    wotd.textContent += randomWordOfTheDay
}else{
    //if no quote
    name.textContent += randomName
    quote.textContent += randomQuote;
    date.textContent += randomDate
    wotd.textContent += randomWordOfTheDay
}    
//debug and see if it's constanly doing the same one
console.log(name, quote, date, wotd);

});
//switch generator


  

