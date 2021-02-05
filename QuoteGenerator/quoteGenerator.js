

button = document.querySelector(".btn").addEventListener("click", displayQuote)


// 1. List of Quotes 

let quotesList = [

    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever", 
        source: "Mahatma Gandhi"
        
    }, 

    {
        quote: "Do what you can, with what you have, where you are", 
        source: "Theodore Roosevelt"
    }, 

    {
        quote: "Be yourself; everyone else is already taken.", 
        source: "Oscar Wilde"
    }, 

    {
        quote: "This above all: to thine own self be true.", 
        source: "William Shakespeare"
    }, 

    {
        quote: "If you cannot do great things, do small things in a great way", 
        source: "Napoleon Hill"
    }, 

    {
        quote: "If opportunity doesn’t knock, build a door.", 
        source: "Milton Berle"
    }

]

// 2. Create a function that pulls one of those quotes out at random


function getRandomQuote(array){
    let randomNum = Math.floor(Math.random() * quotesList.length);
    for(let i=0; i < quotesList.length; i++){
        let getQuote = quotesList[randomNum];
        return getQuote;
    }
}

// A function that displays the quote 
// Split the object into two seperate quotes and source and change into string to display


function displayQuote(){

    let result = getRandomQuote(quotesList);
    let quote = result.quote;
    let source = result.source;
    let displayQuotes = quote ;
    let displaySource = source;

    document.querySelector('h1').innerHTML = displayQuotes;
    document.querySelector('h4').innerHTML = displaySource;

}




displayQuote()










