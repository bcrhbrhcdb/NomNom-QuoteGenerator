let quote = document.getElementById('quote');
let name = document.getElementById('name');
let date = document.getElementById('date');
let wotd = document.getElementById('wordOfTheDay');
const quoteButton = document.querySelector('.generateQuote');
const quotes = [
    {
        wordOfTheDay: 'EXCALIBUR',
        name: 'Alex',
        quote: 'I am testing this stupid thing',
        date: '4/18/24'
    },
    {
        wordOfTheDay: '??',
        name:'Alex',
        quote:'Texttttt',
        date:'4/18/24'
    }
]
quoteButton.addEventListener('click', () => {
    // Get a random quote info from the array
    const randomQuoteInfo = Math.floor(Math.random() * quotes.length);
    const randomName = quotes[randomQuoteInfo].name;
    const randomQuote = quotes[randomQuoteInfo].quote;
    const randomDate = quotes[randomQuoteInfo].date;
    const randomWordOfTheDay = quotes[randomQuoteInfo].wordOfTheDay
// Update the text content of the quote element

if(randomQuote, randomName, randomDate){
    name.textContent = '';
    name.textContent += randomName
    quote.textContent = '';
    quote.textContent += randomQuote;
    date.textContent = '';
    date.textContent += randomDate;
    wotd.textContent = '';
    wotd.textContent += randomWordOfTheDay
}else{
    name.textContent += randomName
    quote.textContent += randomQuote;
    date.textContent += randomDate
    wotd.textContent += randomWordOfTheDay
}    
});