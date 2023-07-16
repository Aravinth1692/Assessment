var numbers = [1,2,3,4,5,6,7,8,9,10];
(function(){
    const filteredValues = numbers.filter((num) => {
        for(let i = 2; i < num; i++){
            if(num % i === 0){ 
                return false;
            }
        }
        return num > 1;
    });
    console.log(filteredValues);
})();

// Arrow Function:

primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}