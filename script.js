function createGrid(height, width){
    let container = document.querySelector('.container');
    container.style.display = "flex";
    container.style.height = "100vh";
    container.style.minHeight = "800px";
    container.style.flexDirection = "column";
    let temp;
    for(let i = 0; i<height; i++){
        temp = document.createElement('div');
        temp.style.display = "flex";
        temp.style.flex = "1 1 0";
        temp.classList.add("row");
        container.appendChild(temp);
    }
    rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        for(let i = 0; i<width; i++){
            temp = document.createElement('div');
            temp.style.border = "2px solid black";
            temp.style.aspectRatio = "1/1";
            temp.style.flex = "0 0 auto";
            row.appendChild(temp);
            temp.addEventListener('mouseover', function (e){
                this.style.backgroundColor = "red";
            });
        }
    });
}

function newGrid(){
    input = document.querySelector("input");
    let container = document.querySelector('.container');
    container.replaceChildren();
    gridSize = Number(input.value);
    createGrid(gridSize, gridSize);
}

button = document.querySelector("button");
button.addEventListener('click', newGrid);
