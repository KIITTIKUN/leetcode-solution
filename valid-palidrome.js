const isPalindrome = (string) => {
  const space = /\s/g;
  const notString = /\W/g;
  const underScore = /_+/g;
  string = string.replaceAll(underScore, '');
  string = string.replaceAll(space, '');
  string = string.replaceAll(notString, '');
  string = string.toLowerCase();
  reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString;
};

console.log(isPalindrome('ab_a'));
