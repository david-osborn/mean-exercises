var ask = require('readline-sync');
var name = ask.question("what's your name?");
console.log("Hello, " + name + " it's nice to meet you.");
var favoritefood = ask.question("What is your favorite food?");
console.log(favoritefood + "?" + " I don't really like " + favoritefood + " . To each his own, I suppose.");
var age = ask.question("How old are you?");
console.log(age + " is pretty young. That means you are " + (87-age) + " years younger than me.");
console.log("So, you are " + age + " years old, you like " + favoritefood + " and your name is " + name);