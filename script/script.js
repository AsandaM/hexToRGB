let inputHex = document.querySelector('input');
let rgbDisplay = document.querySelectorAll('p')[1];
let button = document.querySelector('button');

function hexToDecimal(hexChar) {
    const hexChars = "0123456789ABCDEF";
    return hexChars.indexOf(hexChar.toUpperCase());
}

function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Extract the individual hex characters for each color component
    let r1 = hex[0];
    let r2 = hex[1];
    let g1 = hex[2];
    let g2 = hex[3];
    let b1 = hex[4];
    let b2 = hex[5];

    // Convert each hex character to its decimal equivalent and calculate the color values
    let r = hexToDecimal(r1) * 16 + hexToDecimal(r2);
    let g = hexToDecimal(g1) * 16 + hexToDecimal(g2);
    let b = hexToDecimal(b1) * 16 + hexToDecimal(b2);

    return `rgb(${r}, ${g}, ${b})`;
}

function convertHexToRgb() {
    
    let hex = inputHex.value;

    // Convert the hex value to RGB and display the result
    let rgbColor = hexToRgb(hex);
    rgbDisplay.innerText = rgbColor;
}

button.addEventListener('click', convertHexToRgb);
