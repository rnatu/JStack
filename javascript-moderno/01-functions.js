//# this
console.log("=============this==================")
function minhaFunction() {
  // Este
  this.name = 'Renato';
}

const minhaArrowFunction = () => {
  this.lastname = 'Xavier';
}

console.log(new minhaFunction())

minhaArrowFunction();
console.log(this)

//# arguments
console.log("=============arguments==================")
function somaFunction() {
  console.log(Object.values(arguments))
  // Funciona com arguments ou com rest
}

somaFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 'Renato');


function somaArrowFunction(...args) {
  console.log(args)
  // Funciona SOMENTE com rest, arguments não funciona em arrow functions
}

somaArrowFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 'Renato');