// var myWelcomeMessage = () => {
//   console.log("Hi,Welcome to console");
// };
// myWelcomeMessage();

var isEven = (element) => {
  return element % 2 === 0;
};

// console.log([2, 3, 4, 6].every(isEven));
// console.log([2, 8, 4, 6].every(isEven));

//console.log([2, 8, 4, 6].every((element) => element % 2 === 0));

var test = [1, 2, 3, 2, 2];
//console.log(test.fill("empty", 2, 4));

var resultOfTest = test.filter((element) => element != 2);
console.log(resultOfTest);

var friends = ["nithin", "buffet", "shahank", "tanay", "tanmay"];
console.log(friends.slice(2));
console.log(friends.slice(2, 4));
friends.splice(2, 2, "avalon", "neog");
console.log(friends);
var myInfo = {
  userName: "mani",
  isEmployed: true,
  age: 24,
  isAnAdult: function () {
    //console.log(this);
    return this.age >= 18;
  },
  hobbies: ["finance", "code", "business"],
};
console.table(myInfo.isAnAdult());
friends.forEach((n) => console.log(n));

for (const n of friends) {
  console.log(n);
}
for (const n in myInfo) {
  console.log(myInfo[n]);
}

var User = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getLastName = function () {
    console.log(`your last name is ${this.lastName}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your first name is ${this.firstName}`);
};

// var smk = User("mani", "kandan");
// console.log(smk);

var smk = new User("mani", "kandan");
if (smk.hasOwnProperty("firstName")) {
  smk.getFirstName();
}

console.clear();

//closure programming

function init() {
  var score = "45";

  console.log("inside init");
  function getScore() {
    console.log(`your socre is ${score}`);
  }
  return getScore;
}
var resultOfInit = init();
resultOfInit();

//another example
function addNumber(x) {
  return function (y) {
    return x + y;
  };
}

var resultOfAdd = addNumber(5);
console.log(resultOfAdd(5));

console.log(addNumber(6)(6)); //curring

var mani = {
  firstName: "mani",
  lastName: "kandan",
  getInfo: function () {
    console.log(`
    my first name is ${this.firstName}
    my last name is ${this.lastName}
    `);
  },
};
var ak = {
  firstName: "ajay",
  lastName: "krish",
};

mani.getInfo();

var akInfo = mani.getInfo.bind(ak);
akInfo();

mani.getInfo.call(ak);

//maps

var mapData = new Map();
mapData.set(1, "nithin");
mapData.set(2, "nijhil");
mapData.set(3, "varun");
mapData.set(4, "shank");

for (let [key, value] of mapData) {
  console.log(`My no ${key} inspired man is ${value}`);
}

mapData.forEach((v, k) => console.log(`${v} is my ${k} inspire`));

//destructuring

var maniDetails = ["mani", "kandan", 24];
var [firstName, lastName, age] = maniDetails;
console.log(age);

//object destruct
var userDetails = {
  courseEnrolled: true,
  isAdult: true,
  goodAt: "code",
};

var { courseEnrolled, isAdult, goodIn } = userDetails;
console.log(isAdult);
//goodIn will be undefiened because in object we have to specify same name

console.clear();
//spread and Rest

function addFirst(a, b) {
  return a + b;
}

var arrayAdd = [5, 9];

console.log(addFirst(arrayAdd));
console.log(addFirst(...arrayAdd)); //this is spread

function addExceptFirst(a, ...nums) {
  //this is rest
  sum = 0;
  for (x of nums) {
    sum += x;
  }
  return sum;
}
console.log(addExceptFirst(9, 2, 4));
