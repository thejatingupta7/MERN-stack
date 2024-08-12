// Function to handle click event
function handleClick(button) {
    button.style.backgroundColor = "blue";
}

// Function to handle mouseover event
function handleMouseOver(message) {
    message.style.display = "block";
}

// Function to handle mouseout event
function handleMouseOut(message) {
    message.style.display = "none";
}

// Function to handle double-click event
function handleDoubleClick(button) {
    button.style.display = "none";
}

// Adding event listeners for Button 1
document.getElementById("button1").addEventListener("click", function() {
    handleClick(this);
});

document.getElementById("button1").addEventListener("mouseover", function() {
    handleMouseOver(document.getElementById("message1"));
});

document.getElementById("button1").addEventListener("mouseout", function() {
    handleMouseOut(document.getElementById("message1"));
});

document.getElementById("button1").addEventListener("dblclick", function() {
    handleDoubleClick(this);
});

// Adding event listeners for Button 2
document.getElementById("button2").addEventListener("click", function() {
    handleClick(this);
});

document.getElementById("button2").addEventListener("mouseover", function() {
    handleMouseOver(document.getElementById("message2"));
});

document.getElementById("button2").addEventListener("mouseout", function() {
    handleMouseOut(document.getElementById("message2"));
});

document.getElementById("button2").addEventListener("dblclick", function() {
    handleDoubleClick(this);
});

// Adding event listeners for Button 3
document.getElementById("button3").addEventListener("click", function() {
    handleClick(this);
});

document.getElementById("button3").addEventListener("mouseover", function() {
    handleMouseOver(document.getElementById("message3"));
});

document.getElementById("button3").addEventListener("mouseout", function() {
    handleMouseOut(document.getElementById("message3"));
});

document.getElementById("button3").addEventListener("dblclick", function() {
    handleDoubleClick(this);
});
