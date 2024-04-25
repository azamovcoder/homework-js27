const API__URL = "https://dummyjson.com";
const generalCard = document.querySelector(".cards");
const loading = document.querySelector(".loading");
const seeMore = document.querySelector(".card__see-more");

let limitCount = 3;
let multipleCount = 1;

async function fetchApi(url) {
  let data = await fetch(
    `${url}/products?limit=${limitCount * multipleCount}`,
    {
      method: "GET",
    }
  );

  data
    .json()
    .then((res) => mapApi(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
      seeMore.innerHTML = "See more";
      seeMore.removeAttribute("disabled");
    });
}

fetchApi(API__URL);

function mapApi(data) {
  let card = "";
  data.products.forEach((element) => {
    card += `
            <div class="card">
              <div class="card__top">
                <img src="${element.images[0]}" alt="" />
              </div>

              <div class="card__bottom">
                <h2 class="card__title">${element.title}</h2>
                <p class="card__price">$${element.price}</p>
              </div>
            </div>
        `;
  });

  generalCard.innerHTML = card;
}

seeMore.addEventListener("click", () => {
  multipleCount++;
  fetchApi(API__URL);
  seeMore.innerHTML = "loading...";
  seeMore.setAttribute("disabled", true);
});

function createLoading(data) {
  let loadingItem = "";

  for (let i = 0; i < data; i++) {
    loadingItem += `
        <div class="loading">
            <div class="loading__item bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__price bg__animation"></div>
          </div>
        `;
  }

  loading.innerHTML = loadingItem;
}

createLoading(limitCount);
