const detailsMe = {
  name: "Thanagan",
  age: 19,
  college: "karpagam institue of technology",
  location: "tirupur",
  skills: ["JavaScript", "React", "Node.js"],
  education: {
    degree: "B.Tech",
    year: 2024,
    college: "ABC Institute",
  },
  greet() {
    return `Hello, I'm ${this.name} from ${this.location}`;
  },
  isActive: true,
  bio: null,
};

const detailsMeModels = {
  something: "Nothing",
  welcomeMsg() {
    return `Hi ${this.name} studying in ${this.college}`;
  },
};

Object.assign(detailsMe, detailsMeModels);

const { name, location, language = "Tamil" } = detailsMe;

console.log(`${detailsMe.welcomeMsg()} ${detailsMeModels.something}`);

// Practiced 15-07-205

const detailMe = {
  name: "Thanagan",
  age: 19,
  college: "karpagam institue of technology",
  location: "tirupur",
  skills: ["JavaScript", "React", "Node.js"],
  education: {
    degree: "B.Tech",
    year: 2024,
    college: "ABC Institute",
  },
  greet() {
    return `Hello, I'm ${this.name} from ${this.location}`;
  },
  isActive: true,
  bio: null,
};

const detailMeModels = {
  something: "Nothing",
  welcomeMsg() {
    return `Hi ${this.name} studying in ${this.college}`;
  },
};

Object.assign(detailMe, detailMeModels);
console.log(detailMe.welcomeMsg());
