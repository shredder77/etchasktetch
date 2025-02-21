let button = document.createElement("button");
let container = document.createElement("div");
container.classList.add("container");
newGrid(16);
document.body.appendChild(button);
document.body.appendChild(container);
button.innerText = "New Grid";
button.addEventListener("click", function() {
    let userInput = prompt("Num Squares per side for new grid");
    if(userInput <= 100 && userInput > 0){
        newGrid(userInput);
    }else{
        alert("Maximum of 100");
    }
})

function newGrid(num){
    container.innerHTML = "";
    let width = 1000.0/num;
    for(let i = 0; i < num*num; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width  = width + "px";
        newDiv.style.height  = width + "px";
        container.appendChild(newDiv);
    }
}
