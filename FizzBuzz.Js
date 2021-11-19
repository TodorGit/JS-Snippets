var output = [];
var count= 1

function fizzBuzz(){
 
 if(count % 3===0 && count % 5 === 0){
   output.push("FizzBuzz");
 }
 else if (count % 5 ===0){
   output.push("Buzz");
 }
 else if (count % 3 === 0 ){
   output.push("Fizz");
 }
 else {
   output.push(count);
}

count++;
console.log(output);
}  
  


///// With a for loop

function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "fizz"
    if (i % 5 === 0) str += "buzz"
    if (str === "") str = i;
  
    console.log(str);
  }
}
