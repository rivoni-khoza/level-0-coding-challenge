
function maximumNumber(n1,n2,n3){
let max =n1 > n2 && n1 > n3 ? n1: n2 > n3 && n2 > n1 ? n2:n3;
console.log(max);
}maximumNumber( 3,10,5);

