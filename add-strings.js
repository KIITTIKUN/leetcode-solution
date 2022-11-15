const addStrings = (num1, num2) => {
  let addZeroes = 0;
  let result = 0;
  num1.length < num2.length
    ? (addZeroes = num2.length - num1.length)
    : num1.length > num2.length
    ? (addZeroes = num1.length - num2.length)
    : (addZeroes = 0);
  num1.length < num2.length
    ? (num1 = `${'0'.repeat(addZeroes)}${num1}`)
    : (num2 = `${'0'.repeat(addZeroes)}${num2}`);
  for (let i = 0; i < num1.length; i++) {
    result = parseInt(num1[i]) + parseInt(num2[i]) + result * 10;
  }

  return result;
};

console.log(addStrings('18582506933032752', '366213329703'));

