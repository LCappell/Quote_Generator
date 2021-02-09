

button = document.querySelector(".load-quote").addEventListener("click", printQuote)

// 1. List of Quotes 

let quotes = [

    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever", 
        source: "Mahatma Gandhi",
        year: "year Unknown", 
        citation: "Source Unknown"
        
        
    }, 

    {
        quote: "Do what you can, with what you have, where you are", 
        source: "Theodore Roosevelt",
        year: 1993, 
        citation: "An Autobiography chapter IX"
    }, 

    {
        quote: "Be yourself; everyone else is already taken.", 
        source: "Oscar Wilde",
        year: 1890,
        citation: "Source Unknown"
    }, 

    {
        quote: "This above all: to thine own self be true.", 
        source: "William Shakespeare",
        year: 1609,
        citation: "Hamlet"
    }, 

    {
        quote: "If you cannot do great things, do small things in a great way", 
        source: "Napoleon Hill",
        year: 1883,
        citation: "Source Unknown"
    }, 

    {
        quote: "If opportunity doesn’t knock, build a door.", 
        source: "Milton Berle",
        year: "year Unknown",
        citation: "BrainyQuote.com"
        
    }

]

// 2. Create a function that pulls one of those quotes out at random


function getRandomQuote(array){
    let randomNum = Math.floor(Math.random() * quotes.length);
    for(let i=0; i < quotes.length; i++){
        let getQuote = quotes[randomNum];
        return getQuote;
    }
}

// A function that displays the quote 
// Split the object into two seperate quotes and source and change into string to display


function printQuote(){

    
    let result = getRandomQuote(quotes);
    let quote = result.quote;
    let source = result.source;
    let year = result.year;
    let citation = result.citation;
   

    document.querySelector('.quote').innerHTML = quote ;
    document.querySelector('.source').innerHTML = source;
    document.querySelector('.year').innerHTML = year ;
    document.querySelector('.citation').innerHTML = citation ;
    

}




printQuote()
















