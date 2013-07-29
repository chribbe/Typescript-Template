/// <reference path="Greeter.ts"/>

var greeter = new helpers.Greeter("Hello, world!");
var str = greeter.greet();
str += greeter.greet();
document.body.innerHTML = str;
