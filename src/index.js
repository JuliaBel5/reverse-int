module.exports = function reverse (n) {

    let number = Math.abs(n);
    let arr = Array.from(number.toString(), Number)
    arr.reverse();
    let result = arr.join('');
    
return(result);

}

