function addDiv() {
    let elementInput = document.getElementById("create-element").querySelector("input");
    let colorInput = document.getElementById("bg-color");
    let heightInput = document.getElementById("element-height").querySelector("input");
    let widthInput = document.getElementById("create-width").querySelector("input");
    let paddingInput = document.getElementById("create-padding").querySelector("input");
    let contentInput = document.getElementById("element-content").querySelector("textarea");
    let contentFontFamily = document.getElementById("element-content-ff").querySelector("input");
    let contentFontSize = document.getElementById("element-content-fz").querySelector("input");
    let contentFontColor = document.getElementById("element-content-color").querySelector("input");
    let elementValue = elementInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison

    if (elementValue === "div") {
        // create new div and set styles
        let newDiv = document.createElement("div");
        newDiv.style.width = widthInput.value + "px";
        newDiv.style.height = heightInput.value + "px";
        newDiv.style.padding = paddingInput.value + "px";
        newDiv.style.backgroundColor = colorInput.value;
        let destinationDiv = document.getElementById("left-div-inside");
        destinationDiv.appendChild(newDiv);
        
        // create design and add p element
        let newParagraph = document.createElement("p");
        newParagraph.innerText = contentInput.value;
        newParagraph.style.fontFamily = contentFontFamily.value;
        newParagraph.style.fontSize = contentFontSize.value + "px";
        newParagraph.style.color = contentFontColor.value;
        newDiv.appendChild(newParagraph);


    } else {
        alert("Error: Only 'div' is allowed!");
    }
}

let myButton = document.getElementById("submit-button").querySelector("input");
myButton.addEventListener("click", addDiv);