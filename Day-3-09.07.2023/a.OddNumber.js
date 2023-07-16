var array = [1,2,3,4,5,6,7,8,9,10];
(function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
)
  // IIFE:
    (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])

    // Arrow:
    oddNumbers = (array) => {
      for(var i = 0 ; i< array.length ; i++){
           if(array[i]%2!=0){
              console.log(array[i])
           } 
      }
           }