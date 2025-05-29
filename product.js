// import { F } from "./books";

const getItem = localStorage.getItem("bookId");
console.log(JSON.parse((getItem)));
const book = JSON.parse((getItem));
const title = document.getElementById("bookTitle");


title.innerHTML = book["name"];


const h3txt = "Librōs Omnēs Habeō";
const navItem = `<section id="headerSection">

<header class="navHeader">
		<h3 id="text">${h3txt}</h3>
	<div id="ulWidth">
	<nav>
	<ul>
			
			<a href="index.html">LibrōsVendō</a>
			<a href="productCatalouge.html">Products</a>
			<a href="aboutus.html">About Us</a>
            <a href="contactus.html">Contact Us</a>
			 <a href="basketCart.html">Cart</a>
	</ul>
	</nav>	
	</div>
	</header>
	</section>  
`;


localStorage.setItem("nav",navItem)

const body = document.getElementById("bodyColor");
console.log(navItem)
body.insertAdjacentHTML("afterbegin",navItem)

const ids = (id)=>{
    console.log(id)
    return document.getElementById(id);
}
const divs = ids("styling")
divs.style.padding = "10px";
divs.style.marginLeft = "300px";
divs.style.marginRight = "200px";
divs.style.alignContent="center";

const bookTitle = ids("bookName");
bookTitle.style.position="relative";
bookTitle.style.paddingLeft = "250px";
bookTitle.style.marginLeft = "150px";
bookTitle.style.fontSize = "25px";
bookTitle.innerHTML = book["name"];

const bookImg = ids("bookImg");
bookImg.style.marginLeft = "40px";
bookImg.style.width = "250px";
bookImg.src = "./img/book/"+book["img"];


const bookAuthor = ids("bookAuthor");
bookAuthor.style.marginLeft = "1px";
bookAuthor.innerHTML = "Author: "+book["author"]

const bookPrice = ids("bookPrice");
bookPrice.style.marginLeft = "40px";
bookPrice.style.marginRight = "40px";
bookPrice.style.width = "33px";
bookPrice.innerHTML =  "price:$"+book["price"]


const bookSummary = ids("bookSummary");
bookSummary.innerHTML =  book["Summary"]

function footerF(){

const f = document.getElementById("test")
const foter  = (url)=>{
const Fli = document.createElement('li');
Fli.style.display = "inline-block"
const a = document.createElement('a');
const img = document.createElement('img');
img.src = url;
img.width=30;
img.height=30;
img.style.padding="9px";
img.style.margin="10px";
a.href = "#";
a.appendChild(img);
Fli.appendChild(a)
return Fli
}

console.log(foter('./img/icon/f.png'))
const footerUL = document.createElement('ul');
footerUL.appendChild(foter('./img/icon/f.png'));
footerUL.appendChild(foter('./img/icon/spqr.png'));

f.appendChild(footerUL);

}

const onC =()=>{
    let cart = JSON.parse(localStorage.getItem('Cart'))||[];
    cart.push(book["id"])
    localStorage.setItem("Cart",JSON.stringify(cart))
}

const divReviews = document.getElementById('reviewsId')
const bookReview = book["reviews"]
const tableRow = document.createElement('tr')
const td = document.createElement('td')
const table = document.createElement('table')
bookReview.forEach(element => {
    const user= document.createElement("p")
    user.innerHTML = element["user"]+" :"
    const review = document.createElement("p")
    review.innerHTML = element["review"]
    const rating = document.createElement("p");
    rating.innerHTML = "Rating: " +book["stars"] +" By "+element["user"]
    td.appendChild(rating)
    td.appendChild(review)
    tableRow.appendChild(td);
});
table.appendChild(tableRow)
table.style.border = "1px solid black"
divReviews.appendChild(table)

footerF();