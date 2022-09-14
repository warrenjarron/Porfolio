var messageArray = ["Typewriter Effect"];
var textPosition = 0;
var speed = 100;
typewriter = () => {
document.querySelector("#message").
innerHTML = messageArray [0].substring(0,
    textPosition) + "<span>\u25ae</span>"

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);

}

window.addEventListener("load", typewriter);












// let button = document.getElementById(""dark-mode);
//  let body = document.querySelector("body"); 
//  let tittle = document.querySelector("h1");
//  let paragraphe = document.querySelector("P");

// console.log("button" , body);
// const darkMode = () => {
//     body.classList.remove("bg-white");
//     body.classList.remove("dark-bg-black");

// };

// button.addEventListener("click", darkMode);