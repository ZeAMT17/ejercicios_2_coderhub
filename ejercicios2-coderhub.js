function count(){
    for(let i = 1; i<= 100;i++ ){
    if(i % 2 === 0){
        console.log("par");
    } if(isPrime(i) === true){
        console.log("primo");
        
    } if(isPrime(i) === true && i % 2 === 0){
        console.log("es par y primo");
        
    }else{
        console.log(i);
    }
}
    
}
function isPrime(num){
     if(num === 0 || num === 1 || num === 4){
     return false;
    }
     for(let i = 2; i < num / 2; i++ ){
     if(num % i === 0) return false
    }
     return true;
}

count();

function fizzBuzz(){
    for(i = 1; i <= 100; i++){
        if(multiple(i,3)){
            console.log("Fizz");
    }if(multiple(i,5)){
           console.log("Buzz");
    }if(multiple(i,3) && multiple(i,5)){
        console.log("FizzBuzz");
        
    }else{
        console.log(i);
    }
}
}
function multiple(dividend,divisor){
    if(dividend % divisor === 0){
        return true;
    }else{
        return false;
    }
}
fizzBuzz();

function generator(){
    let signo="*"
    for(i = 0; i < 7; i++){
        console.log(signo.repeat(i))
    }
}
generator();

function chessTable(){	
    let squares = "";
    
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          squares += " ";
        } else {
          squares += "#";
        }
      }
      squares += "\n";
    }
    
    console.log(squares);
        
    }
    
    chessTable();