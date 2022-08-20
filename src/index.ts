let dimension: number;
dimension = Number(prompt(`Ingrese la cantidad de personas`));
let nombres: string[] = new Array(dimension);
let anios: number[] = new Array(dimension);
let alturas: number[] = new Array(dimension);

function cargarNombres(vector: string[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = prompt(
      `Ingrese el nombre de la persona numero: ${indice + 1}`
    );
  }
}
function cargarAnios(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = Number(
      prompt(`Ingrese la edad de la persona numero: ${indice + 1}`)
    );
  }
}
function cargarAlturas(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = Number(
      prompt(`Ingrese la altura de la persona numero: ${indice + 1}`)
    );
  }
}

function mostrarValores(
  vectorNombres: string[],
  vectorAnios: number[],
  vectorAlturas: number[],
  dimension: number
) {
  for (let indice: number = 0; indice < dimension; indice++) {
    console.log(
      "Nombre: " +
        vectorNombres[indice] +
        ", Edad: " +
        vectorAnios[indice] +
        ", Altura: " +
        vectorAlturas[indice]
    );
  }
}
function comparador(
  vectorAnios: number[],
  vectorAlturas: number[],
  indice: number
) {
  let comparacion: number = 0;

  if (vectorAnios[indice] > vectorAnios[indice + 1]) {
    comparacion = 1;
  } else if (vectorAnios[indice] === vectorAnios[indice + 1]) {
    if (vectorAlturas[indice] > vectorAlturas[indice + 1]) {
      comparacion = 1;
    } else if (vectorAlturas[indice] < vectorAlturas[indice + 1]) {
      comparacion = -1;
    }
  } else {
    comparacion = -1;
  }

  return comparacion;
}
function intercambio(vector: any[], indice: number) {
  let aux: string;
  aux = vector[indice];
  vector[indice] = vector[indice + 1];
  vector[indice + 1] = aux;
}
function ordenarVectores(
  vectorNombres: string[],
  vectorAnios: number[],
  vectorAlturas: number[],
  dimension: number
) {
  for (let i: number = 0; i < dimension - 1; i++) {
    for (let indice: number = 0; indice < dimension - 1 - i; indice++) {
      if (comparador(vectorAnios, vectorAlturas, indice) === 1) {
        intercambio(vectorNombres, indice);
        intercambio(vectorAnios, indice);
        intercambio(vectorAlturas, indice);
      }
    }
  }
}

// CARGAR VECTORES
cargarNombres(nombres, dimension);
cargarAnios(anios, dimension);
cargarAlturas(alturas, dimension);
// MOSTRAR VECTORES SIN ORDENAR
mostrarValores(nombres, anios, alturas, dimension);
// ORDENAR VECTORES
ordenarVectores(nombres, anios, alturas, dimension);
// MOSTRAR VECTORES ORDENADOS
mostrarValores(nombres, anios, alturas, dimension);
