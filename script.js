//dado el sueldo de un trabajador aplique un aumento del 15% si su sueldo es inferior a 1000 imprima el sueldo que percibira con el aumento, si su sueldo es mayor a 1000 imprima el sueldo sin aumento

function aumentoSueldo(sueldo) {
  if (sueldo < 1000) {
    let newSueldo = sueldo * 1.15;
    newSueldo = newSueldo / 100;
    newSueldo = parseInt(newSueldo) + parseInt(sueldo);
    console.log(`El sueldo con aumento es: ${newSueldo}$`);
    alert(`El sueldo con aumento es: ${newSueldo}$`);
  } else {
    console.log(`El sueldo sin aumento es: ${sueldo}$`);
    alert(`El sueldo sin aumento es: ${sueldo}$`);
  }
}

let sueldo = prompt("Ingrese su sueldo");
aumentoSueldo(sueldo);
