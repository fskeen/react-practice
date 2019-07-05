"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var attribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = attribute;
        this.age = age;
    }

    _createClass(Person, [{
        key: "getGreeting",
        value: function getGreeting() {
            return "Hello, hello! Welcome, " + this.name + ". You are " + this.age + " years old today.";
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: "getGreeting",
        value: function getGreeting() {
            var desc = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getGreeting", this).call(this);

            if (!!this.major) {
                desc += " Congratulations, you just gradutated with a major in " + this.major + ". And so young, too!";
            } else {
                desc += " Perhaps you could think about majoring in Art. I've heard it's very employable.";
            }
            return desc;
        }
    }]);

    return Student;
}(Person);

// Traveler

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, home) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.home = home;
        return _this2;
    }

    _createClass(Traveler, [{
        key: "getGreeting",
        value: function getGreeting() {
            var greet = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);

            if (!!this.home) {
                greet += " It's wonderful to have you visit. How is " + this.home + " this time of year?";
            } else {
                greet += " Where are you from?";
            }
            return greet;
        }
    }]);

    return Traveler;
}(Person);

var me = new Person("Faye", 28);
console.log(me.getGreeting());

var me2 = new Person(undefined, 60);
console.log(me2.getGreeting());

var student = new Student("Bartleby", 82, "CompSci");
console.log(student.getGreeting());

var student2 = new Student("Boromir", 58, undefined);
console.log(student2.getGreeting());

var traveler1 = new Traveler("Jester", 34, "Nicodranas");
console.log(traveler1.getGreeting());

var traveler2 = new Traveler("Caleb", 38, undefined);
console.log(traveler2.getGreeting());