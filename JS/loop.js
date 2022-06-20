function printingNumbers(inp){
    for (let i = 0; i < inp; i++){
      console.log(i);
    }
  }
  
  
  // This is another function to iterate through an array
  
  function arrayLooper(arr){
    let i = 0
    while (i < arr.length){
      console.log(arr[i]);
      i++
    }
  }
  
  arr = [1, 4, 6, 7, 8];
  inp = 20;
  
  arrayLooper(arr);
  printingNumbers(inp);