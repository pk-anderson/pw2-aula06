import {arraysEqual, equalElements, arraysOfArraysEqual, compareArrays, Cidade, descreveCidade, Restaurante, agruparRestaurantesPorCidade} from './index'

//Questão 1

var firstArray = ['eu','tu','ele']
var secondArray = ['nos','vos','eles']
console.log(arraysEqual(firstArray,secondArray))
var firstArray = ['eu','tu','ele']
var secondArray = ['eu','tu','ele']
console.log(arraysEqual(firstArray,secondArray))

//Questão 2

var firstArray = ['eu','tu']
var secondArray = ['eu','tu','ele']
console.log(equalElements(firstArray,secondArray))
var firstArray = ['eu','tu','ele']
var secondArray = ['eu','tu','eles']
console.log(equalElements(firstArray,secondArray))

//Questão 3

const a: string[][] = [['a', 'b'], ['c', 'd']]
const b: string[][] = [['a', 'b'], ['c', 'd']]
const c: string[][] = [['a', 'b'], ['d', 'c']]
console.log(arraysOfArraysEqual(a, b))
console.log(arraysOfArraysEqual(a, c))

//Questão 4

const d: string[][] = [['a', 'b'], ['c', 'd']]
const e: string[][] = [['a', 'b'], ['d', 'c']]
const result = compareArrays(d, e)
console.log(result)

//Questão 5

const cidade: Cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coordenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
  };
  
  console.log(descreveCidade(cidade));
  
//Questão 6

const restaurantes: Restaurante[] = [
    { cidade: "Cajazeiras", nome: "Burgdega" },
    { cidade: "Sousa", nome: "Dino's" },
    { cidade: "Cajazeiras", nome: "Avenida" },
];
  
const resultado = agruparRestaurantesPorCidade(restaurantes);
console.log(resultado);
