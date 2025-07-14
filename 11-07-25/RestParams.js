const sumItems = (...nums) => {
  let val = 0;

  for (let x of nums) {
    val += x;
  }
  console.log(val);
};

sumItems(1, 53, 23, 656, 45, 32);

// with IIFE

// type 1

((...nums) => {
  let val = 0;

  for (let x of nums) {
    val += x;
  }
  console.log(val);
})(1, 30, 62, 85, 56, 32);

// type 2

(function sumItem(...nums) {
  let val = 0;

  for (let x of nums) {
    val += x;
  }
  console.log(val);
})(1, 54, 2, 43, 7, 20, 32);

// Practiced on 14-07-2025

((...num) => {
  val = 300;

  for (let n of num) {
    val -= n;
  }
  console.log(val);
})(2, 3, 5, 7, 4, 3);
