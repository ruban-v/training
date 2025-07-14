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

// Practiced on 14-07-2025

const subTract = (...num) => {
  val = 300;

  for (let n of num) {
    val -= n;
  }
  console.log(val);
};

subTract(2, 3, 5, 7, 4, 3);
