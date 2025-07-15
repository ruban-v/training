var data = {
  name: "ruban",
  age: 19,
  location: "tirupur",
};

Object.entries(data).forEach(([key, value]) => {
  console.log(value);
});

// practiced 15-07-2025

var datas = {
  name: "ruban",
  age: 19,
  location: "tirupur",
};

Object.entries(datas).forEach(([key, values]) => {
  console.log(`${key} : ${values}`);
});
