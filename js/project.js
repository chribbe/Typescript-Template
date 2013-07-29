var helpers;
(function (helpers) {
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "<h1>" + this.greeting + "</h1>";
        };
        return Greeter;
    })();
    helpers.Greeter = Greeter;
    ;
})(helpers || (helpers = {}));
var greeter = new helpers.Greeter("Hello, world!");
var str = greeter.greet();
str += greeter.greet();
document.body.innerHTML = str;
