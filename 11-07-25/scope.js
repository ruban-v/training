let userName = "ruban"; // global
console.log(userName); // logged globally - ruban

{
  let userName = "karthik"; // local
  console.log(userName); // locally accessed with same varname - karthick
}

console.log(userName); // again logged globally - ruban
