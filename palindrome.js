const isPalindromeNumber = (number) => {
  let copyNumber = number;
  let reverseNumber = 0;
  while (copyNumber > 0) {
    reverseNumber = reverseNumber * 10 + (copyNumber % 10);
    copyNumber = Math.floor(copyNumber / 10);
  }
  return (number >= 0 && number < 10) || reverseNumber == number;
};

console.log(isPalindromeNumber(5));
