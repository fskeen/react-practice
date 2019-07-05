class Person {
    constructor(attribute = "Anonymous", age = 0) {
        this.name = attribute;
        this.age = age;
    }

    getGreeting() {
        return `Hello, hello! Welcome, ${this.name}. You are ${this.age} years old today.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getGreeting() {
        let desc = super.getGreeting();
        
        if (!!this.major) {
          desc += ` Congratulations, you just gradutated with a major in ${this.major}. And so young, too!`  
        } else {
            desc += ` Perhaps you could think about majoring in Art. I've heard it's very employable.`
        }
        return desc;
    }
}

// Traveler

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting() {
        let greet = super.getGreeting()

        if (!!this.home) {
            greet += ` It's wonderful to have you visit. How is ${this.home} this time of year?`
        } else {
            greet += ` Where are you from?`
        }
        return greet;
    }
}

const me = new Person("Faye", 28);
console.log(me.getGreeting());

const me2 = new Person(undefined , 60);
console.log(me2.getGreeting());

const student = new Student("Bartleby", 82, "CompSci")
console.log(student.getGreeting())

const student2 = new Student("Boromir", 58, undefined)
console.log(student2.getGreeting())

const traveler1 = new Traveler("Jester", 34, "Nicodranas")
console.log(traveler1.getGreeting())

const traveler2 = new Traveler("Caleb", 38, undefined)
console.log(traveler2.getGreeting())