let userName = "ruban"; // global
console.log(userName); // logged globally - ruban

{
  let userName = "karthik"; // local
  console.log(userName); // locally accessed with same varname - karthick
}

console.log(userName); // again logged globally - ruban

// Practiced on 14-07-2025

((...num) => {
  let val = 300; // global

  {
    let val = 200; // local
    for (let n of num) {
      val -= n;
    }
    console.log(val);
  }

  for (let n of num) {
    val -= n;
  }
  console.log(val);
})(2, 3, 5, 7, 4, 3);
