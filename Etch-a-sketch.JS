const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");

function createGrid(squaresPerSide) {
    container.innerHTML = "";

    const squareSize = 600 / squaresPerSide;

    const totalSquares = squaresPerSide * squaresPerSide;
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#333"; 
        });

        container.appendChild(square);
    }
}

function handleReset() {
    let userInput =prompt("Enter the number of squares per side for the new grid (Max: 100):");
    
    if (userInput === null) return; 

    let num = parseInt(userInput);

    if (isNaN(num) || num < 1 || num > 100) {
        alert("Please enter a valid number between 1 and 100!");
        handleReset();
    } else {
        createGrid(num);
    }
}


resetBtn.addEventListener("click", handleReset);

createGrid(16);