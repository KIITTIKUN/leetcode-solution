const moveZeroes = (integerNumbers) => {
  let addZeroes = integerNumbers.length;
  const indexOfZeroes = [];
  if (integerNumbers.indexOf(0) === -1) {
    return integerNumbers;
  }
  for (let i = 0; i < integerNumbers.length; i++) {
    if (integerNumbers[i] === 0) {
      indexOfZeroes.push(i);
    }
  }
  indexOfZeroes.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < indexOfZeroes.length; i++) {
    integerNumbers.splice(indexOfZeroes[i], 1);
  }

  addZeroes = addZeroes - integerNumbers.length;
  for (let i = 0; i < addZeroes; i++) {
    integerNumbers.push(0);
  }
  return integerNumbers;
};

console.log(moveZeroes([0, 0, 1]));
