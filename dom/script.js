const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productRatingInput = document.getElementById('productRating');
const addButton = document.getElementById('addButton');
const priceGraphContainer = document.getElementById('priceGraph');
const ratingGraphContainer = document.getElementById('ratingGraph');
const sortPriceButton = document.getElementById('sortPrice');
const sortRatingButton = document.getElementById('sortRating');

let products = [];

addButton.addEventListener('click', () => {
    // Create product object
    // Add product to products array
    // Update graphs
});

function createBar(value, max) {
    // Create a div element with height based on value and max
    // Return the created bar element
}

function updatePriceGraph() {
    // Clear the price graph container
    // Create bars for each product's price
    // Append bars to the price graph container
}

function updateRatingGraph() {
    // Clear the rating graph container
    // Create bars for each product's rating
    // Append bars to the rating graph container
}

function sortByPrice() {
    // Sort products by price
    updatePriceGraph();
}

function sortByRating() {
    // Sort products by rating
    updateRatingGraph();
}
