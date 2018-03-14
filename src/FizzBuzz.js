/*
 FizzBuzz
 Escreva uma lib que receba um número e:
 Se o número for divisível por 3, no lugar do número escreva 'Fizz',
 Se o número for divisível por 5, no lugar do número escreva 'Buzz',
 Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
 Se não for multiplo de nada retorna o número.
*/

const FizzBuzz = (num) => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

export default FizzBuzz;

