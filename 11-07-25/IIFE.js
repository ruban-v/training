(function sumAll(no1, no2, no3) {
  let result = no1 + no2 + no3;
  console.log(result);
})(2, 4, 5);

// Practiced on 14-07-2025

((...num) => {
  val = 300;

  for (let n of num) {
    val -= n;
  }
  console.log(val);
})(2, 3, 5, 7, 4, 3);
