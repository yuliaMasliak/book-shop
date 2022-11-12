let fragment = document.createDocumentFragment();

let header = document.createElement('header');
header.classList.add("header");

let logo = document.createElement('div');
logo.classList.add("logo");
logo.innerHTML = '<img src="images/logo.png" alt="logo" ></ing'

let cart = document.createElement('div');
cart.classList.add("cart");
cart.innerHTML = '<img src="images/cart.png" alt="cart" ></img>';
cart.setAttribute("ondrop", "drop(event)");
cart.setAttribute("ondragover", "allowDrop(event)");

let cartcount = document.createElement('div');
cartcount.classList.add("cartcount");

header.append(logo);
header.append(cartcount);

fragment.appendChild(header);

let wrapper = document.createElement('div');
wrapper.classList.add("wrapper");

let back = document.createElement('div');
back.innerHTML = '<img src="images/bg.jpg" alt="books" ></img>';
back.classList.add("back");

let text = document.createElement('div');
text.innerHTML = '<h1>WELCOME <br> to  Book Shop</h1>';
text.classList.add("welcome-text");
back.append(text);

wrapper.append(back);

let grid = document.createElement('div');
grid.classList.add("grid");
let gridCol = document.createElement('div');
let gridCol1 = document.createElement('div');
let gridCol2 = document.createElement('div');
let gridCol3 = document.createElement('div');


grid.append(gridCol);
grid.append(cart);
grid.append(gridCol2);
grid.append(gridCol3);
cart.append(cartcount);

wrapper.append(grid);

gridCol1.innerHTML = '';

let main = document.createElement('main');
document.body.append(main);
let mainGrid = document.createElement('div');
mainGrid.classList.add("main-grid");
main.append(mainGrid);
wrapper.append(main);

fragment.appendChild(wrapper);
document.body.appendChild(fragment);

let books = [{
  "author": "Douglas Crockford",
  "imageLink": "images/book1.jpg",
  "title": "JavaScript: The Good Parts: The Good Parts",
  "price": 30,
  "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
  {
    "author": "David Herman",
    "imageLink": "images/book2.jpg",
    "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "price": 22,
    "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
  },
  {
    "author": "David Flanagan",
    "imageLink": "images/book3.jpg",
    "title": "JavaScript: The Definitive Guide",
    "price": 40,
    "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
  },
  {
    "author": " Eric Elliott",
    "imageLink": "images/book4.jpg",
    "title": "Programming JavaScript Applications",
    "price": 19,
    "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
  },
  {
    "author": "Addy Osmani",
    "imageLink": "images/book5.jpg",
    "title": "Learning JavaScript Design Patterns",
    "price": 32,
    "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
  },
  {
    "author": "Boris Cherny",
    "imageLink": "images/book6.jpg",
    "title": "Programming TypeScript",
    "price": 28,
    "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
  },
  {
    "author": "Alex Banks, Eve Porcello",
    "imageLink": "images/book7.jpg",
    "title": "Learning React, 2nd Edition",
    "price": 25,
    "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
  },
  {
    "author": "Bradley Meck Alex Young and Mike Cantelon",
    "imageLink": "images/book8.jpg",
    "title": "Node.js in Action",
    "price": 38,
    "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
  },
  {
    "author": "Kyle Simpson",
    "imageLink": "images/book9.jpg",
    "title": "You Don't Know JS Yet: Get Started",
    "price": 26,
    "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
  },
  {
    "author": "John Resig and Bear Bibeault",
    "imageLink": "images/book10.jpg",
    "title": "Secrets of the JavaScript Ninja",
    "price": 33,
    "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
  }
]
 let arr=[];

function createCatalog(book){
  let bookCard = document.createElement('div');
  bookCard.classList.add("bookCard");
  let btnBuy = document.createElement('button');
  btnBuy.innerHTML = "Add To Cart";
  btnBuy.classList.add("btn-buy");
  let cardHeading = document.createElement('h2');
  cardHeading.innerHTML = `${book.title} <p>${book.author}</p>`;
  cardHeading.classList.add("card-heading");
  let price = document.createElement('h3');
  price.innerHTML = `$ ${book.price}`;
  price.classList.add("price");

let descriptionBlock = document.createElement('div');
descriptionBlock.classList.add("descriptionBlock");

  let description = document.createElement('p');
  description.innerHTML = `${book.description}`;
  description.classList.add("description");

  let btnLearn = document.createElement('button');
  btnLearn.innerHTML = "Learn more";
  btnLearn.classList.add("btn-learn");

  let bookImage = document.createElement('div');
  bookImage.innerHTML = `<img src=${book.imageLink}></img>`;
  bookImage.classList.add("book-image");
  bookImage.setAttribute("draggable", "true");
  bookImage.setAttribute("ondragstart", "drag(event)");

  cart.setAttribute("ondrop", "drop(event)");
  cart.setAttribute("ondragover", "allowDrop(event)");

  bookCard.append(bookImage);
  bookCard.append(cardHeading);
  bookCard.append(price);
  descriptionBlock.append(description)
  descriptionBlock.append(btnBuy);
  descriptionBlock.append(btnLearn);
  bookCard.append(descriptionBlock);

  return bookCard;
}


books.forEach(book=>{
  let card = createCatalog(book);
  mainGrid.append(card);
});

let confirmBtn = document.createElement('button');
confirmBtn.classList.add("confirm-btn");
confirmBtn.innerHTML = "Make an Order";

grid.append(confirmBtn);


let buyAction = document.querySelectorAll(".btn-buy");

let count = 1;
for(let x of buyAction){
x.addEventListener("click", addToCart);
function addToCart(event){
  cartcount.innerHTML = `<h2>${count}</h2>`;
  ++ count;
  confirmBtn.classList.add("confirm-btn-show");
}}

let learnAction = document.querySelectorAll(".btn-learn");
for(let y of learnAction){
let closest = y.closest('div');

y.addEventListener("click", showDescription);
 function showDescription(event){
  closest.classList.toggle("descriptionBlock-show");}
  }

let imgeToDrag = document.querySelectorAll(".book-image");
console.log(imgeToDrag)

for(let el of imgeToDrag){

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  cartcount.innerHTML = `<h2>${count}</h2>`;
   ++ count;
  confirmBtn.classList.add("confirm-btn-show");
  }
  }
  document.querySelector(".confirm-btn").onclick = function () {
    location.href = "delivery/index.html";
};




