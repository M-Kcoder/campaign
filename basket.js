// import { F } from "./books";

const getItem = localStorage.getItem("bookId");
// console.log(JSON.parse((getItem)));
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


// localStorage.setItem("nav",navItem)

const body = document.getElementById("bodyColor");
// console.log(navItem)
body.insertAdjacentHTML("beforebegin",navItem)

const ids = (id)=>{
    return document.getElementById(id);
}

const div = document.getElementById("Cart")
const idArrays = JSON.parse(localStorage.getItem("Cart"))
div.style.paddingTop = "20px"
div.style.paddingLeft = "150px"

const books = JSON.parse(localStorage.getItem("GetBooksGenres"))
let total = 0;
const totalPrice = document.createElement("p");
totalPrice.style.whiteSpace ="pre"
for(let i=0;i<=idArrays.length;i++){
    books.forEach(x=>
        {
            if(x["id"]==idArrays[i]){
                total+=Number(x["price"])
          const p = document.createElement('p');
          p.style.whiteSpace ="pre"
        p.innerHTML = `${x["name"]}\t \t \t \t$:${x["price"]}`
        div.appendChild(p)
        totalPrice.innerHTML = `Total Price\t \t \t $:${x["price"]}`
    }
   }
   )
}

div.appendChild(totalPrice)

const button = document.createElement("button")
button.innerHTML = "Buy"
button.onclick = function(){
    // localStorage.removeItem("bookId")
    localStorage.removeItem("Cart")
    alert("Bought")
    div.remove()
}
div.appendChild(button)
body.appendChild(div)
