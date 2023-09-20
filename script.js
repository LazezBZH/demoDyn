function init() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      // let products = "";
      // products = data.products;

      renderHome(data);
    });
}

function renderHome(data) {
  const page = document.querySelector("#root");

  const sectionThumbs = document.createElement("section");

  sectionThumbs.classList.add("thumbs");

  page.appendChild(sectionThumbs);

  let thisProducts = data.products;

  sectionThumbs.innerHTML = `<h3>Nos produits</h3> <div class="divThumbs"></div>`;
  const divThumbs = document.querySelector(".divThumbs");
  for (let i = 0; i < thisProducts.length; i++) {
    let product = thisProducts[i];

    divThumbs.innerHTML += `<figure class="thumbnail">
    <img class="thumbnail-cover" id="thumbnail-cover" src="${product.cover}"
         alt="${product.title}">
    <figcaption>
    <div class="thumbnail-content">
                           <span class="tag" id="tag">${product.price}  €</span>
    <h4 class="thumbnail-title" > ${product.title}</h4>
                            <p class="thumbnail-description" >${product.description}</p>
                            <div class="thumbnail-details">
                                <a href="/product.html?productId=${product.id}" >En savoir plus</a>
                            </div>
                        </div>
    
    </figcaption>
</figure>
`;
  }
}

init();
