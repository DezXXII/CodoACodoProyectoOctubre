let APIKEY = "iIMBMlrrbRfTmA0SLVjWw8CNybq82xNt";

window.onload = function() {
    fetchGifs();
}

async function fetchGifs() {

    await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=14`)
    .then(res => res.json())
    .then(res => {
        console.log(res.data);
        for(let i = 0; i < 14; i++) {

            let gifContainer = document.createElement("div");
            let gifTitleContainer = document.createElement("div");
            let gifTitle = document.createElement("h2");
            let gifImg = document.createElement("img");

            gifImg.src = res.data[i].images.downsized.url;
            gifTitle.textContent = res.data[i].title;

            gifContainer.classList.add("gif-container");
            gifTitleContainer.classList.add("gif-title");

            gifContainer.appendChild(gifTitleContainer);
            gifContainer.appendChild(gifImg);

            gifTitleContainer.appendChild(gifTitle)

            gifsContainer.appendChild(gifContainer);
        }
    });
}

const categoryInput = document.getElementById("category-input")
const testBtn = document.getElementById("testBtn")
const gifsContainer = document.querySelector(".gifs-container");

async function fetchGifsByCategory(category) {

    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=14&q=${category}`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for(let i = 0; i < 14; i++) {

            let gifContainer = document.createElement("div");
            let gifTitleContainer = document.createElement("div");
            let gifTitle = document.createElement("h2");
            let gifImg = document.createElement("img");

            gifImg.src = res.data[i].images.downsized.url;
            gifTitle.textContent = res.data[i].title;

            gifContainer.classList.add("gif-container");
            gifTitleContainer.classList.add("gif-title");

            gifContainer.appendChild(gifTitleContainer);
            gifContainer.appendChild(gifImg);

            gifTitleContainer.appendChild(gifTitle)

            gifsContainer.appendChild(gifContainer);
        }
    })
}

testBtn.addEventListener("click", e => {
    e.preventDefault();
    gifsContainer.innerHTML = '';
    fetchGifsByCategory(categoryInput.value);
})
var input=document.getElementById("category-input");

input.addEventListener("keypress", e => {
    if (e.key === "Enter"){
        e.preventDefault();
        gifsContainer.innerHTML = '';
        fetchGifsByCategory(categoryInput.value);
    }
    
})
