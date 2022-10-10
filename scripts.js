let APIKEY = "iIMBMlrrbRfTmA0SLVjWw8CNybq82xNt";

window.onload = function() {
    fetchGifs();
}

async function fetchGifs() {

    await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=5`)
    .then(res => res.json())
    .then(res => {
        console.log(res.data);
        for(let i = 0; i < 5; i++) {
            let gifContainer = document.createElement("div");
            let gifTitle = document.createElement("h2");
            let gifImg = document.createElement("img");
            gifImg.src = res.data[i].images.downsized.url;
            gifTitle.textContent = res.data[i].title;
            gifContainer.classList.add("gif-container");
            gifContainer.appendChild(gifTitle);
            gifContainer.appendChild(gifImg);
            gifsContainer.appendChild(gifContainer);
        }
    });
}

const categoryInput = document.getElementById("category-input")
const testBtn = document.getElementById("testBtn")
const gifsContainer = document.querySelector(".gifs-container");

async function fetchGifsByCategory(category) {

    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=${category}`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for(let i = 0; i < 5; i++) {
            let gifContainer = document.createElement("div");
            let gifTitle = document.createElement("h2");
            let gifImg = document.createElement("img");
            gifImg.src = res.data[i].images.downsized.url;
            gifTitle.textContent = res.data[i].title;
            gifContainer.classList.add("gif-container");
            gifContainer.appendChild(gifTitle);
            gifContainer.appendChild(gifImg);
            gifsContainer.appendChild(gifContainer);
        }
    })
}

testBtn.addEventListener("click", e => {
    e.preventDefault();
    gifsContainer.innerHTML = '';
    fetchGifsByCategory(categoryInput.value);
})