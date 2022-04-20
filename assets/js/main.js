let fonts = "font-family: 'Bodoni Moda', serif, font-family: 'Open Sans', sans-serif, font-family: 'Roboto', sans-serif, font-family: 'Yusei Magic', sans-serif";

let fontSize = document.getElementById('font-size');
let select = document.getElementById("select-font");
let inputText = document.getElementById('text-input');
let output = document.getElementById('output');

function fontChange() {
    // console.log('font size' + fontSize.value);
    // console.log('font family' + select.value);
    // console.log('inout text' + inputText.value);
    output.style.fontFamily = select.value;
    output.style.fontSize = fontSize.value  + 'px';
    output.innerHTML = inputText.value;
};



