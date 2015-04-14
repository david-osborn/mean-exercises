/* I put all of the function exercises into one file, for organization's sake.
I will separate the exercises with comment lines, for eas of viewing.
In most of these, I have it do both a console.log(), and a return. That is so
I can test them in JSbin.com AND have variables be equal to them. I wouldn't do that
in real life, most likely.*/

//This is the first. It adds numbers, returns a value, makes a variable calling the function,
//and logs the results
function add(x,y){
	return(x + y);
	console.log(x + y);
}

//This is the second one, it finds the largest of the three numbers.
function largest(x,y,z){
	if ((x > y)&&(x > z)){
		console.log(x);
		return x;
	}elseif ((y > x)&&(y > z)){
		console.log(y);
		return y;
	}else{
		console.log(z);
		return z;
	}
}

//Behold!! Number three:
function evenOdd(x){
	if((x % 2) === 0){
		console.log(x + " is even!");
		return "even";
	}else{
		console.log(x + " is odd!");
		return "odd";
	}
}

//Number four is next. It was the first tricky one:
function strange(x){
	var strlen = x.length;
	if(strlen <= 20){
		console.log(x + x);
	}else{
		console.log(x.substr(0,(strlen / 2)));
	}
}

//Number five is even trickier than the last. So tricky, that I went around it and used a clunky array.
function fibonacci(x){

}

//number six. It spits out a number without errors, but I'm still not sure it's working right:
function quad(a,b,c){
	var x = (-b - Math.sqrt((b*b)-(4*a*c) / (2*a)));
	console.log(x);
}

