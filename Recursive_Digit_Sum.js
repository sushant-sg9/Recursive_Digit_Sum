let n = "9875"
let k = 4
function getSum(n) {
    if(n.length === 1){
        return parseInt(n);
    }
    
    let arr = n.split("");
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    
    return getSum(sum.toString());
}

function superDigit(n, k) {
    if(n.length === 1 && k === 1){
        return parseInt(n);
    }
    
    let sum = getSum(n) * k;
    return getSum(sum.toString());   
}
console.log(superDigit(n,k))