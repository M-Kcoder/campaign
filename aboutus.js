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

const body = document.getElementById("bodyColor");
console.log(navItem)
body.insertAdjacentHTML("afterbegin",navItem)

const p = document.createElement('h3')
p.innerHTML = "Quid Est Librōs Vendō?";
p.style.padding = "20px"  

const para1 = document.createElement('p')
para1.innerHTML = "What is Librōs Vendō?";
para1.style.padding = "20px" 


const para2 = document.createElement('p')
para2.innerHTML = "It is a Liber(masculine form of book)\n Librōs is plural accusative form of Liber and Vendo(present, indicative, 3rd conjugation) means I sell.\n the Librōs Vendō means I sell books\n We sell books from the Italian Peninsula.\n Our Motto is Librōs Omnēs Habeō, which is 'I have all the books'. ";
para2.style.padding = "20px";


const para3 = document.createElement('p')
para3.style.padding = "20px";
para3.innerHTML = "Why do We sell books?\n\n The Elder Cato once wrote: 'Disce! Aliquid.\nnam cum subito Fortuna recessit,Ars remanet vitamque hominis non deserit umquam.'"+
"\n( Learn Something, When Suddenly The Luck Goes out or recede, Skills will remain ever and it wont desert the life of anyone.).\n\n We sell books so that you can gather as many skills as possible."


const para4 = document.createElement('p')
para4.innerHTML = "Post Scriptum(PS):My website design is bad, but my classical latin is Pulchra, Gratissimus, et Formosa.";
para4.style.padding = "20px";
para4.style.fontSize = "5px";

const div = document.getElementById("createElements");
div.appendChild(p)
div.appendChild(para1)
div.appendChild(para2)
div.appendChild(para3)
div.appendChild(para4)



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


footerF();