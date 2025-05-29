const books = [
  {
    "name": "Aeneid",
    "id": "0",
    "author": "Virgil",
    "img": "aeneid.jpg",
    "price": "99",
    "stars": "7",
    "Summary": "Virgil’s masterpiece blends myth, destiny, and political propaganda into a legendary epic. Aeneas is a hero burdened by fate, but his journey is both thrilling and tragic. The poetic style elevates the narrative, but the heavy reliance on divine intervention may feel distant compared to Homeric epics.",
    "reviews": [
      { "user": "James", "review": "A timeless epic that merges mythology, history, and fate. Aeneas’ journey is inspiring, though he feels less independent than other classical heroes." },
      { "user": "Emily", "review": "Loved the adventure and emotional depth. Dido’s tragedy made the story unforgettable." },
      { "user": "Daniel", "review": "Virgil’s poetic style is stunning, but the heavy involvement of gods sometimes overshadows the characters’ personal struggles." },
      { "user": "Sophia", "review": "Beautifully written but requires patience—some sections felt slow, but the themes of exile and destiny were powerful." }
    ],
    "genre":"Epic Poetry, Mythology, Historical Fiction",
  },
  {
    "name": "Ars Poetica",
    "id": "1",
    "author": "Quintus Horatius Flaccus",
    "img": "arsPoetica.jpg",
    "price": "99",
    "stars": "6",
    "Summary": "Horace’s guide to poetry is insightful and structured, making it a must-read for literary enthusiasts. His emphasis on clarity and balance resonates, but modern readers might find some principles too rigid for contemporary creativity.",
    "reviews": [
      { "user": "Michael", "review": "Horace offers brilliant advice on poetic clarity and purpose. A must-read for those interested in classical literature." },
      { "user": "Anna", "review": "Helpful for understanding poetry structure, but some rules feel outdated for modern creativity." },
      { "user": "David", "review": "Horace’s insights on harmony in poetry are genius, but the rigid guidelines might not appeal to contemporary writers." },
      { "user": "Olivia", "review": "Interesting read, though some parts were a bit dry. Great for writers looking to refine their craft." }
    ], "genre":"Literary Criticism, Poetics",
  },
  {
    "name": "Assimil Latin",
    "id": "2",
    "author": "Clément Desessard",
    "img": "assimilil.jfif",
    "price": "99",
    "stars": "4",
    "Summary": "The Assimil method is revolutionary for Latin learners, teaching intuitively through immersion. However, it requires dedication and consistency, and some learners may struggle with the lack of explicit grammatical explanations.",
    "reviews": [
      { "user": "Chris", "review": "An immersive method for learning Latin, though beginners may struggle without structured grammar lessons." },
      { "user": "Jessica", "review": "Fun and engaging, but I wish there were more explanations for complex sentence structures." },
      { "user": "Mark", "review": "Perfect for intuitive learning, but requires patience—would be better with additional exercises." },
      { "user": "Sarah", "review": "The natural assimilation approach is effective, but some direct translations would make learning smoother." }
    ],"genre":"Language Learning, Linguistics"
  },
  {
    "name": "Cato Maior de Senectute",
    "id": "3",
    "author": "Cicero",
    "img": "catomaro.jpg",
    "price": "99",
    "stars": "4",
    "Summary":"Cicero’s reflections on aging are philosophically rich, offering wisdom on embracing life’s later years. While intellectually rewarding, its elitist tone and emphasis on stoic virtue may not resonate with all audiences.",
    "reviews": [
      { "user": "John", "review": "A valuable reflection on aging—Cicero’s wisdom still holds relevance today." },
      { "user": "Laura", "review": "Interesting perspective, but felt overly idealized. Aging isn’t just about gaining wisdom, it comes with challenges too." },
      { "user": "Henry", "review": "A powerful philosophical work that makes you rethink old age as a time of freedom rather than decline." },
      { "user": "Mia", "review": "Deep, but not the easiest read. Took time to digest some of the philosophical ideas." }
    ] ,"genre":"Philosophy, Classical Essays"
  },
  {
    "name": "Colloquia Personarum",
    "id": "4",
    "author": "Hanz Oberg",
    "img": "coloquia.jpg",
    "price": "99",
    "stars": "4",
    "Summary": "Perfect for learners engaging in conversational Latin! The interactive approach helps reinforce vocabulary naturally, but the lack of direct translations may frustrate absolute beginners.",
    "reviews": [
      { "user": "Tom", "review": "A great way to reinforce Latin vocabulary through engaging dialogues." },
      { "user": "Emma", "review": "Helpful supplement to Familia Romana, though it’s tough without direct translations." },
      { "user": "Lucas", "review": "Makes Latin fun! A fantastic way to improve comprehension without heavy grammar drills." },
      { "user": "Grace", "review": "Enjoyed the interactive style, though beginners might need extra guidance." }
    ] ,"genre":"Language Learning, Conversational Latin"
  },
  {
    "name": "Latin for Dummies",
    "id": "5",
    "author": "Spartacus",
    "img": "dummies.jpg",
    "price": "99",
    "stars": "5",
    "Summary": "A solid introduction to Latin with accessible explanations. Ideal for casual learners, but advanced students may find it too simplistic compared to traditional grammar-based courses.",
    "reviews": [
      { "user": "William", "review": "A great introduction! Clear explanations and practical examples make Latin accessible." },
      { "user": "Rebecca", "review": "Easy to follow, but felt too basic at times—better for casual learners than serious students." },
      { "user": "Ethan", "review": "Good for learning common phrases, but doesn’t dive deep into grammar." },
      { "user": "Charlotte", "review": "Fun and informative, though it won’t make you fluent on its own." }
    ],"genre":"Reference, Linguistics"
  },
  {
    "name": "Pugio Bruti",
    "id": "6",
    "author": "Caesar",
    "img": "pugiobruti.jpg",
    "price": "99",
    "stars": "4",
    "Summary": "Hans Ørberg’s immersion-based method is considered one of the best for Latin acquisition. The gradual progression makes learning intuitive, though some students may miss direct grammar instruction.",
    "reviews": [
      { "user": "Benjamin", "review": "An exciting historical mystery that keeps you engaged while learning Latin." },
      { "user": "Natalie", "review": "Enjoyed the simple Latin writing style—makes reading easier for learners." },
      { "user": "George", "review": "A fun mix of language learning and storytelling, though the plot felt predictable." },
      { "user": "Abigail", "review": "Loved the Roman setting! A great way to practice Latin while enjoying a good story." }
    ],"genre":"Historical Fiction, Latin Learning"
  }
];
const test = document.getElementById("test");
const p = document.createElement("h3");
p.innerHTML = "Best Selling";
p.style.margin = "30px";
test.append(p);
function f(){
	const ul = document.createElement("ul");
	ul.style.marginLeft ="60px";
	books.forEach(x=>{
	
	// ul.style.listStyle= "none";
	const li = document.createElement("li");
	li.style.display = "inline-block";
	li.style.margin = "10px";
	li.style.padding="10px";

	const name = document.createElement("p");
	name.innerHTML = x.name;
	const id = document.createElement("p");
	id.innerHTML = x.id;
	const img = document.createElement("img");
	img.src = "./img/book/"+x.img;
	img.width = 300;
	img.height = 350;
	img.style.paddingLeft=10;
	img.style.paddingRight=10;
	img.style.margin=10;
	img.onclick=function(){
		const objBook = {
			"name":x.name,
			"id":x.id,
			"author":x.author,
			"img":x.img,
			"price":x.price,
			"stars":x.stars,
			"Summary":x.Summary,
			"reviews":x.reviews
		}
		localStorage.setItem("bookId",JSON.stringify(objBook));
	}
	let a = document.createElement("a");
	a.href = "./product.html"
	a.append(img)
	li.appendChild(a);
	li.appendChild(name);
	ul.appendChild(li);
	
});		
	return ul;
}
for(let i =0; i<4; i++){
	test.appendChild(f());
}


const footer = document.createElement('footer');
const footerUL = document.createElement('ul');
const ptag =document.createElement('p');
p.innerHTML = "These books can not be imported from Romanum Imperium, "+
 "as SPQR has been fallen in the year of 27 BCE."+
 " Batteries not included.";

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

footer.append(p);
footerUL.appendChild(foter('./img/icon/f.png'))
footerUL.appendChild(foter('./img/icon/spqr.png'))
footerUL.appendChild(foter('./img/icon/spqr.png'))
footerUL.appendChild(foter('./img/icon/f.png'))
footerUL.appendChild(foter('./img/icon/spqr.png'))
footerUL.appendChild(foter('./img/icon/spqr.png'))
footer.style.border="1px solid black";
footer.appendChild(footerUL);
test.append(footer)
console.log("aaa")


localStorage.setItem("GetBooksGenres",JSON.stringify(books))