
// refactor spinner1.js

// make an array of the symbols
const symbols = ['|', '/', '-', '\\', '|' ];


let spinner2 = function (symbols) {
  let duration = 100;
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + symbols[i]);
    }, duration);
    duration += 200;

  }
}

spinner2(symbols);
