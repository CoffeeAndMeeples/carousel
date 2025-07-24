let myInterval = setInterval(moveUpOne, 5000);

let currentlyActiveImage = 1;
const numberOfImages = 3;

function makeImageActive(currentNumber, newNumber) {
    currentlyActiveImage = newNumber;
    //set the displayed image to number
    const imagesNode = document.querySelector(".images");
    imagesNode.classList.remove("image" + currentNumber)
    imagesNode.classList.add("image" + newNumber);

    //highlight the correct bottom circle
    const oldCircle = document.querySelector(".circle" + currentNumber);
    oldCircle.classList.remove("active")
    const newCircle = document.querySelector(".circle" + newNumber);
    newCircle.classList.add("active");
}

//make listeners for the circles
for (let i = 1; i <= numberOfImages; i++) {
    let circle = document.querySelector(".circle" + i);
    circle.addEventListener("click", (event) => {
        clearInterval(myInterval);
        myInterval = setInterval(moveUpOne, 5000);
        const newNumber = i;
        const oldNumber = currentlyActiveImage;
        makeImageActive(oldNumber, newNumber);
    })
}

//make listeners for left and right buttons

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
    clearInterval(myInterval);
    myInterval = setInterval(moveUpOne, 5000);
    moveUpOne();
})

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
    
    myInterval = setInterval(moveUpOne, 5000);
    //if it's currently on the first image set it to last image
    if (currentlyActiveImage === 1) {
        makeImageActive(currentlyActiveImage, numberOfImages);
            
     }
    //else move it down one
    else {
        let minusOne = currentlyActiveImage - 1;
        makeImageActive(currentlyActiveImage, minusOne);
    }
})

function moveUpOne() {
    //if it's currently on the last image set it back to one
    if (currentlyActiveImage === numberOfImages) {
        makeImageActive(currentlyActiveImage, 1);
        
    }
    //else move it up one
    else {
        let plusOne = currentlyActiveImage + 1;
        makeImageActive(currentlyActiveImage, plusOne);
    }
}