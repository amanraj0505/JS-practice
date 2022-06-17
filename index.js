//hoisting
var a = 3;
let b = 4;
const c = 5;
console.log(window.a, window.b, window.c);
// let const hoistd somewhere else then window, script memory space
console.log(window);

//scope chanin
function fun1() {
  console.log(e);
}
var e = 10;
fun1();
// scope chain 2
function fun2() {
  fun3();
  function fun3() {
    console.log(f);
  }
}
var f = 11;
fun2();
{
  var g = 12;
  let h = 13;
  const i = 14;
}
// h and i are block scope

//shadowing

var j = 15;
{
  let j = 16;
}

// var to let shadowing is legal but let to var is illegal as
//shadowing shouldn't cross the boundry of scope

//Closures

function fun4() {
  var k = 17;
  return function fun5() {
    console.log(k);
  };
}
var closure = fun4();
closure();

//nested closure
function fun6() {
  var l = 18;
  return function () {
    var m = 19;
    return function () {
      console.log(l, m);
    };
  };
}
var nestedClosure1 = fun6();
var nestedClosure2 = nestedClosure1();
nestedClosure2();

//functional statement it is hoisted that means it can be called before the defination

fun7();
function fun7() {
  console.log("This is a functional Statement");
}

//functional expression is not hoisted and it cant be called before defination, it will give refrence error

var n = function () {
  console.log("this is a functional expression");
};
n();

//anonymous function
let o = function () {};
//named functional expression

var p = function fun8() {
  console.log("this is a named functional expression");
};
p();
//a(); will give error

//higher order function

const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (let i in radius) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));

//map, filter reduce

const arr = [5, 1, 3, 2, 6];
const output1 = arr.map(double);
function double(x) {
  return x * 2;
}
console.log(output1);

const output2 = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});
console.log(output2);

const output3 = arr.filter(odd);
function odd(x) {
  return x % 2 !== 0;
}
console.log(output3);
//call, apply, bind

let name1 = {
  fName: "Aman",
  lname: "Raj",
};
function printName(hometown, age) {
  console.log(
    this.fName + " ",
    this.lname + " is " + age + " years old " + "from " + hometown
  );
}
let name2 = {
  fName: "Aman1",
  lname: "Raj1",
};
// this is also called function borrowing as we can botrrow function form other objects, it avoids duplication of code.
printName.call(name1, "Odisha", "24");
printName.call(name2, "Odisha", "24");

// only difference from call to apply method is the way of passing arguements in apply its passed as an array.
printName.apply(name1, ["Odisha", "24"]);

// its also works as a call method but instead of calling the function it returns the copy of that methnod binded with that passed object reference.
const bindedMethod = printName.bind(name1, "Odisha", "24");
bindedMethod();

//polyfill for bind (very important)
let name3 = {
  fname: "Aman",
  lname: "Raj",
};
let printFullname = function (arg1) {
  console.log(
    "Pollyfill (bind): " + this.fname + " " + this.lname + " " + arg1
  );
};
let normalBind = printFullname.bind(name3);
normalBind("hiiiiii");

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...arg1) {
    obj.apply(args[0], [...params, ...arg1]);
  };
};

let printFullname2 = printFullname.myBind(name3);
printFullname2("hiiiii");

// Function Currying
// There are 2 methods (1) Using Bind (2) Using Closure

//using Bind
let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
let multiplyByFour = multiply.bind(this, 4);
multiplyByFour(4);

//using closure
let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyBySix = multiply2(6);
multiplyBySix(6);
