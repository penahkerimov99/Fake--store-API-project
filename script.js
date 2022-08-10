const main = document.querySelector('.products');
let products = [];

const trimText = (value, number) =>{
    return value.substring(0, number) + "...";
}

const listItems = (image,title,category,price)=>{
    let Product = document.createElement("div");
    let Image = document.createElement("img");
    let Title = document.createElement("h2");
    let Category = document.createElement("h4");
    let Price = document.createElement("h3");
    let Button = document.createElement("div");

    Product.classList.add("product");
    Button.classList.add("sebet");

    Image.src = image;
    Title.textContent = title;
    Category.textContent = category;
    Price.textContent = price + "AZN."
    Button.innerHTML += "Səbətə at" + `${"<i class='fas fa-cart-arrow-down'></i>"}`

    Product.appendChild(Image);
    Product.appendChild(Title);
    Product.appendChild(Category);
    Product.appendChild(Price);
    Product.appendChild(Image);
    Product.appendChild(Button);
    main.appendChild(Product)

}


const getProducts = async() =>{
    let data = await fetch('https://fakestoreapi.com/products');
    let result = await data.json();

    products = result;
   products.map((item)=>{
      listItems(item.image,trimText(item.title,25),item.category,item.price);
   })
   console.log(products)
}

getProducts()