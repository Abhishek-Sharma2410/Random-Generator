let button = document.getElementById("button");
let combinations = new String("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
let GivePassword = document.getElementById("inpla");
button.addEventListener("click", ()=>{
    let lengthOfPassword =parseInt(document.querySelector("#length").value);
    let password = "";
    for(let i=0; i<lengthOfPassword; i++){
        password+=combinations[Math.floor(Math.random()*62)];
    }
    GivePassword.value = password;
})


let hamburger = document.getElementById("hamburger");
let linksTab = document.querySelector(".links");
let close = document.querySelector("#close");
hamburger.addEventListener("click", ()=>{
    linksTab.classList.toggle("active")
})
close.addEventListener("click", ()=>{
    linksTab.classList.toggle("active")
})