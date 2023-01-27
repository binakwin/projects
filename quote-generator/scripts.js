// quotes from API
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQ = document.getElementById('new-quote');
const loader = document.getElementById('loader');



function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}


function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show new quote
let apiQuotes = []
function newQuote(q){
    loading();
    // pick random quote from apiQuotes
    const quote = q[Math.floor(Math.random() * q.length)];
 
// check author is unknown 
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
        
    } else {
        quoteText.classList.remove('long-quote');
        
    }
    quoteText.textContent = quote.text;
   complete(); 
}    


    // Tweet the content


    function tweetQuote(){
        const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

        window.open(tweetUrl, '_blank');
    }

  
    // add envent lister


async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        let apiQuotes = await response.json();
       
        newQuote(apiQuotes);
    }catch(error){
        // Catch Error
    }
}

newQ.addEventListener('click', getQuotes);

twitterBtn.addEventListener('click', tweetQuote);

getQuotes();

// loading();