function init() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      let product = "";
      product = data.products.filter(
        (product) => product.id == query("productId")
      )[0];
      console.log(product);
      renderProductModel(product);
    });
}

function renderProductModel(product) {
  const productPage = document.querySelector("#productRoot");

  const sectionProductImage = document.createElement("section");
  const sectionProductText = document.createElement("section");

  sectionProductImage.classList.add("productImg");
  sectionProductText.classList.add("productTxt");

  productPage.appendChild(sectionProductImage);
  productPage.appendChild(sectionProductText);

  sectionProductImage.innerHTML = `
 <img class="productImage" id="productImage" src="${product.cover}"
         alt="${product.title}">
`;
  sectionProductText.innerHTML = `<h1>${product.title}
</h1> <button class="back"><a href="/">X</a></button>
<h2>${product.description}</h2>
<p>${product.details}</p>`;
}

init();
