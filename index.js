//elaborar un algoritomo que busque de forma secuencial un valor dentro de un arreglo de n elementos numericos

function searchValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(`El valor ${value} se encuentra en la posicion ${i + 1}`);
      return;
    }
  }
  console.log(`El valor ${value} no se encuentra en el arreglo`);
}

let arr = [1, 5, 6, 7, 15, 23, 12, 3, 30];
let value = 7;
searchValue(arr, value);
