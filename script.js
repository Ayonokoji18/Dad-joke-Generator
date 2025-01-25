const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "JzzziVHZUJhvEeut0J4SLg==bsOohJVkd0uUgAcP";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
  try {
    jokeEl.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText = "LOADING...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = " An error happened";
    btnEl.disabled = false;
    btnEl.innerText = "tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
