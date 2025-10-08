// for (i = 0; i <= 100; i++) {
//     console.log("Hello World" +" " + i)
// }


// let age = Number(prompt("Enter your age"));
//  while (age < 18) {
//     console.log("Your are yeang")
//     Number(prompt("Your are yeang, Enter your age again"));
//     age++;

//  }

//  if (age >= 18) {
//     prompt("You can drive");
//  }

// console.log("Hello World");

// const arr = [1, 2, 3, 4, 5];

// console.log(arr[3]);

// const person = (name, age) => {
//    return {
//       name: name,
//       age: age,
//        sayHello() {
//          console.log("Hello " + this.name);
//       }
//    }
// }

// const person1 = person("John", 25);
// const person2 = person("Jane", 30);
// console.log(person1); // John
// console.log(person2.sayHello());


function Person (name, age)  {
      this.name = name,
      this.age = age,
      this.sayHello = function() {
         console.log("Hello " + this.name);
         console.log("Hello " + this.age);
      }
   
}

let person1 = new Person("John", 25);
let person2 = new Person("Jane", 30);
console.log(person1.sayHello());

