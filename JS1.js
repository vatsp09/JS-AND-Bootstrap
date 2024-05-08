let x=32243
let result = 0;

while(x>0){
    // Getting the rightmost digit
    rightmost = x%10;
    
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    x = Math.floor(x/10);
}
console.log("Reversed number is : " + result)