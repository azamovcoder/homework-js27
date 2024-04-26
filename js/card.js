const API_URL = "https://dummyjson.com";
const singleContent = document.querySelector(".single__content");
let limitCount = 1;
async function fetchData(URL) {
  let param = new URLSearchParams(window.location.search);
  let id = param.get("id");

  const data = await fetch(`${URL}/products/${id}`);

  data
    .json()
    .then((res) => createContent(res))
    .catch((err) => console.log(err));
}

fetchData(API_URL);

function createContent(data) {
  singleContent.innerHTML = `
    <div class = ""singleCard__img>
    <img src = ${data.images[0]}>
    </div>
    <div>
        <h2 class= "data__title">${data.title}</h2>
        <h3> Price : <span class = "card__price"> ${data.price}$ </span></h3>
        <p> <span class = "card__span">Brand:</span> ${data.brand}</p>
        <p><span class = "card__span">Category : </span></span>${data.category}</p>
        <p><span class = "card__span">Description :  </span class = "card__desc">${data.description}</p>
        <p><span class = "card__span">Rating :</span> ${data.rating}<img href= "../images/Star.svg"></p>

        
    </div>
    `;
}
