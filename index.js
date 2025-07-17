const products = [
  {
    id: 101,
    name: "Laptop",
    price: 45000,
    inStock: true,
  },
  {
    id: 102,
    name: "Mobile",
    price: 20000,
    inStock: false,
  },
  {
    id: 103,
    name: "Headphones",
    price: 1500,
    inStock: true,
  },
  {
    id: 104,
    name: "charger",
    price: 2000,
    inStock: true,
  },
];

products.forEach(({ id, name, price, inStock }) =>
  console.log(id, name, price, inStock)
);

const nextObj = {
  id: 105,
  name: "Sound Bar",
  price: 32000,
  inStock: true,
};

products.push(nextObj);

console.log("After pushing");

products.forEach(({ id, name, price, inStock }) =>
  console.log(id, name, price, inStock)
);
