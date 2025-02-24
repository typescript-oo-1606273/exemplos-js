// import chalk from "chalk";
import { somar, subtrair, multiplicar, dividir } from "./calculadora.js"; //ES6 Modules

/**
 * Tipos primitivos
  - Number: para números.
  - String: para textos.
  - Boolean: para valores true ou false.
  - Null: representa a ausência intencional de valor.
  Usar let e const
*/

let valor = 10; //number
let texto = "Aula de Typescript"; //string
let vamosEstudar = true; //boolean
let variavelSemValor = null;

//Fracamente tipada
valor = 20;
valor = 30;
valor = "Aula";
valor = false;

const variavelConstante = 10;
// variavelConstante = 20;

/*
Exemplos de Objeto:
    - pessoa
    - endereço
    - carro
  Acessando dados de um objeto
*/

const pessoa = {
  nome: "Jeff",
  idade: 29,
  cidade: "Novo Hamburgo",
};

const endereco = {
  rua: "Rua qualquer",
  bairro: "Centro",
  cidade: "Porto Alegre",
};

/*
Exemplos de Arrays
*/
const nomesAlunos = ["Igor", "Luiz", "Helen"]; //lista de strings
const idades = [28, 35, 50, 80]; //lista de numbers
const pessoas = [
  {
    nome: "Jeff",
    idade: 29,
    cidade: "Novo Hamburgo",
  },
  {
    nome: "João",
    idade: 38,
    cidade: "Porto Alegre",
  },
]; //lista de objetos
const listaDeListas = [
  [10, 12, 15],
  [2, 3, 15],
  [10, 1, 15],
  [10, 5, 15],
]; //lista de listas (matrizes)

/*
Exemplos de Funções
*/

// function somar(num1, num2) {
//   return num1 + num2;
// }

// const total1 = somar(15, 6);
// const total2 = somar(15, 12);

// console.log(total1, total2);

/*
Exemplo de uso de biblioteca externa
*/

// const verde = chalk.green("Primeira Aula de Typescript");
// console.log(verde);
// console.log(chalk.red("Vermelho"));

// npm - Node package manager

/*
Chamando um arquivo externo
*/
const resultadoSoma = somar(10, 5);
const resultadoSubtracao = subtrair(5, 2);
const resultadoMulti = multiplicar(25, 3);
const resultadoDiv = dividir(10, 2);

console.log(resultadoSoma, resultadoSubtracao, resultadoMulti, resultadoDiv);
