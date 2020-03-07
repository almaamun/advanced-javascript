let mamun;
console.log(mamun);
// return is not defined
function add (num1, num2){
    console.log(num1 + num2 );
    
}
const result = add(12, 23);
console.log(result);
// if any parameter is not defined
function add( n1 , n2){
    console.log(n1, n2);
    
}
const result2 = add(12);
console.log(result2);
// undefined value
const property = {name: "mamun", contact: 10000}
console.log(property.phone);
// reserved keyword with undefined
let fun = undefined;
console.log(fun);