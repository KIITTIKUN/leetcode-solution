const longestCommonPrefix = (array) => {
  let prefix = '';
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[0][i] !== array[j][i]) {
        return prefix;
      }
    }
    prefix += array[0][i];
  }
  return prefix;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
