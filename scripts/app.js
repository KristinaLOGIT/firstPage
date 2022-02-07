//console.log("hello from script");

const myButton = document.querySelector("button");
const myImage = document.querySelector("img");
const images = ["pilt1", "pilt2", "pilt3", "pilt4", "pilt5" ];

myButton.addEventListener("click",()=> {
console.log("click");

//generate a random number from 0 to 4

let randomIndex = Math.floor(Math.random()*images.length);
console.log(randomIndex);

let randomImagePath = "images/" + images [randomIndex] + ".jpg"
console.log(randomImagePath);

myImage.src=randomImagePath;
});
