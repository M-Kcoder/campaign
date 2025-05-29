
function getIds(id){
    return document.getElementById(id)
}
const nav = localStorage.getItem("nav")
const h3=document.createElement("h3")
h3.style.marginRight = "100px"

const body = getIds("bodyColor")
body.append(h3)
body.insertAdjacentHTML("beforebegin",nav)

const div = getIds("contents")

const newDiv = document.createElement('div')
newDiv.style.marginLeft = "10px";
newDiv.style.padding = "20px"

const booksGenres = localStorage.getItem("GetBooksGenres")
const stringifyBook  = JSON.parse(booksGenres)
stringifyBook.forEach(x => {
    let flag = false;
    const p = document.createElement('p')
    p.innerHTML = x["genre"]
    p.addEventListener('mouseover',()=>{p.style.fontSize="40px"})
    p.addEventListener('mouseout',()=>{p.style.fontSize = "30px"})
    const newDivPara = document.createElement('div')
    const p2 = document.createElement('p')
    p.addEventListener('click',()=>{
        flag=!flag
        if(flag==true){
           p2.innerHTML = `Name: ${x["name"]}
           <br> Author: ${x["author"]}<br>  Price:${x["price"]}<br>  Summary:${x["Summary"]}`;
           p2.style.color = "black"
           p2.style.margin = "20px"
           newDivPara.appendChild(p2)
        //    newDiv.appendChild(newDivPara)
           p.insertAdjacentElement("afterend",newDivPara)
        //    p2.remove()
        }
        else{
            console.log("dd")
            // p2.remove()
          newDivPara.remove()
          flag=false;
        }
    })
    newDiv.appendChild(p)
});

div.appendChild(newDiv)


