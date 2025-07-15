const values = {
  name: "ruban",
  age: 19,
  location: "tirupur",
  skills: ["JavaScript", "React", "Node.js"],
  education: {
    degree: "B.Tech",
    year: 2024,
    college: "ABC Institute",
  },
  greet: function () {
    return `Hello, I'm ${this.name} from ${this.location}`;
  },
  isActive: true,
  bio: null,
};

console.log(values);
