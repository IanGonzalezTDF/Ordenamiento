let dimension;
dimension = Number(prompt(`Ingrese la cantidad de personas`));
let nombre: string[] = new Array(dimension);
let anios: number[] = new Array(dimension);
let altura: number[] = new Array(dimension);

function cargarNombre(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = prompt(
      `Ingrese el nombre de la persona numero: ${indice + 1}`
    );
  }
}
function cargarAnios(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = prompt(
      `Ingrese la edad de la persona numero: ${indice + 1}`
    );
  }
}
function cargarAltura(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    vector[indice] = prompt(
      `Ingrese la altura de la persona numero: ${indice + 1}`
    );
  }
}

function mostrarValores(vector: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++) {
    console.log(vector[indice]);
  }
}

cargarNombre(nombre, dimension);
cargarAnios(anios, dimension);
cargarAltura(altura, dimension);

mostrarValores(nombre, dimension);
mostrarValores(anios, dimension);
mostrarValores(altura, dimension);

function ordenarVector(vector: number[], dimension: number) {
  let temporal: number;
  for (let i: number = 0; i < dimension; i++) {
    for (let indice: number = 0; indice < dimension - i; indice++) {
      if (vector[indice] > vector[indice + 1]) {
        temporal = vector[indice];
        vector[indice] = vector[indice + 1];
        vector[indice + 1] = temporal;
      }
    }
  }
}
