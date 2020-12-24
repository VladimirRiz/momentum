const blockquote = document.querySelector("blockquote"),
        figcaption = document.querySelector("figcaption"),
        btnQuotes = document.querySelector(".change-quotes"),
        content = document.querySelector(".quote");

const animationQuotes = () => {
        btnQuotes.onclick = null
        content.style.opacity = 0;
        setTimeout(() =>{
                getQuote();
                btnQuotes.onclick = animationQuotes;
        },500)
}

        // var item = items[Math.floor(Math.random() * items.length)];

async function getQuote() {  
    const url = `assets/quotes.json`,
        res = await fetch(url),
        data = await res.json(),
        item = [data.quotes[Math.floor(Math.random() * data.quotes.length)]];
       
    blockquote.textContent = item[0].quote;
    figcaption.textContent = item[0].author;
    content.style.opacity = 1
   
  }

  document.addEventListener('DOMContentLoaded', getQuote);
  btnQuotes.onclick = animationQuotes
  