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
