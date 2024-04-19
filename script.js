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
const quoteButton2 = document.querySelector('.generateQuote2')

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
const quotes2 = [
    {
        name: 'Kurt Vonnegut',
        quote: 'True terror is to wake up one morning and discover that your high school class is running the country',
        date: 'March 2015'
    },
    {
        name:'Oscar Wilde',
        quote:'Always forgive your enemies; nothing annoys them so much.',
        date:'June 1954'
    },
    {
        name: 'Jerry Seinfeld',
        quote:'Sometimes the road less traveled is less traveled for a reason.',
        date:'February 1997'
    },
    {
        name: 'Phyllis Diller',
        quote:'Never go to bed mad. Stay up and fight.',
        date:'November 2016'
    },
    {
        name: 'Judith Martin',
        quote:'If you can’t be kind, at least be vague.',
        date:'September 1997'
    },
    {
        name: '',
        quote:'',
        date:''
    },
    {
        name: '',
        quote:'',
        date:''
    },
    {
        name: '',
        quote:'',
        date:''
    },
    {
        name: '',
        quote:'',
        date:''
    },
    {
        name: '',
        quote:'',
        date:''
    },
    {
        name: '',
        quote:'',
        date:''
    },
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
//same thing but with nomrla quotes //add functionallity
quoteButton.addEventListener('click', () => {
    // Get a random quote info from the array
    const randomQuoteInfo2 = Math.floor(Math.random() * quotes2.length);
    const randomName2 = quotes2[randomQuoteInfo2].name;
    const randomQuote2 = quotes2[randomQuoteInfo2].quote;
    const randomDate2 = quotes2[randomQuoteInfo2].date;
// Update the text content of the quote element

if(randomName2){
    //see if there is a quote alread there
    name2.textContent = '';
    name2.textContent += randomName2
    quote2.textContent = '';
    quote2.textContent += randomQuote2;
    date2.textContent = '';
    date2.textContent += randomDate2;
}else{
    //if no quote
    name2.textContent += randomName2
    quote2.textContent += randomQuote2;
    date2.textContent += randomDate2
} 
console.log(name, quote, date, wotd);

});

  

