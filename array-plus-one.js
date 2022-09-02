const plusOne = (oldArray) => {
  const newArray = [].concat(oldArray);
  let finalIndexOfArray = parseInt(newArray.slice(-1));
  if (finalIndexOfArray >= 0 && finalIndexOfArray <= 8) {
    newArray[newArray.length - 1] += 1;
  }
  if (finalIndexOfArray === 9) {
    for (let i = 1; i <= newArray.length; i++) {
      if (parseInt(newArray.slice(-i)) === 9) {
        newArray.splice(-i, 1, 0);
      } else if (parseInt(newArray.slice(-i)) !== 9) {
        newArray.splice(-i, 1, parseInt(newArray.slice(-i)) + 1);
        break;
      }
    }
    if (newArray[0] === 0) {
      newArray.unshift(1);
    }
  }
  return newArray;
};
console.log(plusOne([9]));
