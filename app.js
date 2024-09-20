let password = document.querySelector("#password");
let save = document.querySelector("button");
let container = document.querySelector(".container");
let mainpage = document.querySelector(".mainpage");
let incorrect = document.querySelector(".Incorrect");
// let folder = document.querySelector("span");
// let anchor = document.querySelector(".link");
// let filename = document.querySelector(".filename");
let section = document.querySelector("section");

function pass(){
    let mypass = 2255;
    let userpass = document.getElementById("password").value;
    if(userpass == mypass){
        container.style.display = "none";
        mainpage.style.display = "contents";
    }
    else {
        console.log("incorrect");
        incorrect.style.display = "contents";
        setTimeout(() => {
            incorrect.remove();
        }, 2000);
    }
}
save.addEventListener("click",()=>{
    pass();
})

function createfile(l, n){
    const box = document.createElement("span");
    const image = document.createElement('img');
    image.src = "/items/foldercyangithub_93076.png";
    image.className = "folder";
    let anchor = document.createElement('a');
    anchor.href = l;
    let fname = document.createElement("p");
    fname.innerText = n;
    fname.className = "fname";
    anchor.appendChild(image);
    anchor.appendChild(fname);
    box.appendChild(anchor);
    section.appendChild(box);
}




