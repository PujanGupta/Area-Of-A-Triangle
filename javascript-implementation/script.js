const prompt = require('prompt-sync')();

while (true) {
    const base = prompt('Base: ');
    const height = prompt("Height: ");

    console.log(0.5 * base * height);
};