// console.log("hi");

let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);

console.log(3 + 3);
console.log("3" + "3");
console.log("3" + +3);
console.log(3 + +"3");
console.log(3 + 3 - 3);
console.log("3" + "3" - "3");

const sum = (a = 3, b = 5) => {
  return a + b;
};
const val = sum(5, null);
console.log(val);

const sum2 = (a = 3, b = 5) => {
  return a + b;
};

const val2 = sum(5, undefined);
console.log(val2);

const greet = () => {
  console.log(this.msz);
};
var obj = {
  msz: "Hello",
};
greet.call(obj);

console.log(x);
var x = 10;

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);

const classdata = {
  student: [
    { name: "jack", age: 30, hobiies: ["travel", "music"] },
    { name: "jack", age: 30, hobiies: ["gh", "jj"] },
  ],
};
console.log(classdata.student[0].hobiies[0]);

// foo();
// var foo = () => {
//   console.log("Hi i am inside Foo");
// };
// console.log(foo());

// bar()
// const bar = () => {
//     console.log("Hi i am Foo")
// }

var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);
  var salary = "5000$";
  console.log("my new salary " + salary);
})();

let objA = { prop1: 42 };
let objB = objA;
objB.prop1 = 90;
console.log(objA);

let objC = { prop1: 42 };
let objD = objC;
objD = {};
console.log(objC);

const aa = () => {
  let objA = {
    foo: "foo",
    bar: "bar",
  };
  let objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA === objB);
  console.log(objB === objA);
};

aa();

const dd = () => {
  let animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
};

dd();

const year = ["feb", "march", "april"];
const addstart = year.join("").slice(3, 8).split("/");

console.log(addstart);
