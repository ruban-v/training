const sumAll = (no1, no2, no3) => {
  let result = no1 + no2 + no3;
  console.log(result);
};

sumAll(2, 4, 5);

// arrow func with IIFE

// type 1

const SumAll = ((no1, no2, no3) => {
  let result = no1 + no2 + no3;
  console.log(result);
})(2, 10, 5);

// type 2 anonymous arrow function
((no1, no2, no3) => {
  let result = no1 + no2 + no3;
  console.log(result);
})(2, 9, 3);
