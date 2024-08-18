const container = document.getElementById("container");
const fetchAPI = "https://fakestoreapi.com/products";

async function app() {
  const res = await fetch(fetchAPI);
  const products = await res.json();

  console.log(products);

  products.forEach((product) => {
    const productCard = document.createElement("div");
    const productTitle = document.createElement("h3");
    const productPrice = document.createElement("p");
    const productImage = document.createElement("img");

    productTitle.textContent = product.title;
    productPrice.textContent = `$${product.price}`;
    productImage.src = product.image;

    productCard.append(productImage, productTitle, productPrice);
    container.append(productCard);

    productCard.classList.add("productCard");
  });
}

app();
