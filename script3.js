// Get elements using different methods
const mainHeading = document.getElementById("main-heading");
const textContentParagraphs = document.getElementsByClassName("text-content");
const mainImage = document.querySelector("#main-image");
const containerDiv = document.querySelector(".container");
const containerParagraphs = document.querySelectorAll(".container p");

// Manipulate elements
mainHeading.textContent = "DOM Manipulation Practice";

for (let paragraph of textContentParagraphs) {
    paragraph.style.color = "blue";
}

mainImage.src = "https://via.placeholder.com/200";

containerDiv.style.backgroundColor = "lightgray";

for (let paragraph of containerParagraphs) {
    paragraph.textContent = "Modified paragraph";
}
