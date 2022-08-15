const digitCount = (num) => {
  const digits = num.split('');
  const dataCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < digits.length; i++) {
    dataCount[parseInt(digits[i])] += 1;
  }
  for (let i = 0; i < digits.length; i++) {
    if (dataCount[i] !== parseInt(digits[i])) {
      console.log(dataCount);
      console.log(digits);
      return false;
    }
  }
  return true;
};

console.log(digitCount('6210001000'));
