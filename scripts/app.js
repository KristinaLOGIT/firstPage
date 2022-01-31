//console.log("hello from script");

const myButton = document.querySelector("button");
const myImage = document.querySelector("img");

myButton.addEventListener("click",()=> {
console.log("click");
myImage.src="images/pilt5.jpeg";
});
