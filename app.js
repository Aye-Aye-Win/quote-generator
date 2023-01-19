let quote = document.querySelector(".quote-text");
const btn = document.querySelector(".quote-btn");

function randomQuote() {
    fetch('https://api.quotable.io/random')
        .then(res=>res.json())
        .then(json=>{
            quote.innerText= json.content;
        });
}
btn.addEventListener("click",randomQuote);