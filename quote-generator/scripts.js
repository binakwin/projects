// quotes from API





// show new quote
let apiQuotes = []
function newQuote(q){
    // pick random quote from apiQuotes
    const quote = q[Math.floor(Math.random() * q.length)];
    console.log(quote);
}    


async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        let apiQuotes = await response.json();
       
        newQuote(apiQuotes);
    }catch(error){
        // Catch Error
    }
}



getQuotes();