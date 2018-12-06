function add (stringArr) {
  let intArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    intArr.push(parseInt(stringArr[i]))
  }

  return intArr.reduce((acc, curr)=> {
    return acc + curr
  }, 0)
}



function subtract (arr) {
  let intArr = [];
  for (let i = 0; i < arr.length; i++) {
    intArr.push(parseInt(arr[i]))
  }
  return intArr[0] - intArr[1];
}



function divide (arr) {
  let intArr = [];
  for (let i = 0; i < arr.length; i++) {
    intArr.push(parseInt(arr[i]))
  }
  console.log(intArr, (intArr[0]/intArr[1]));
  return (intArr[0]/intArr[1]).toFixed(3);
}



function multiply (arr) {
  let intArr = [];
  for (let i = 0; i < arr.length; i++) {
    intArr.push(parseInt(arr[i]))
  }
  console.log(intArr);

  return intArr.reduce((acc, curr) => {
    return acc *= curr;
  }, 1)
}


// console.log(add(['1','2','3']));
// console.log(multiply(['1','2','3']));

module.exports = {
  add,
  subtract,
  divide,
  multiply
}
