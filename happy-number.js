const isHappyNumber = (number) => {
  while (true) {
    if (number == 1) {
      return true;
    } else if (number > 1 && number < 7) {
      return false;
    }
    let newNumber = 0;
    while (number > 0) {
      newNumber = newNumber + (number % 10) ** 2;
      number = Math.floor(number / 10);
    }
    number = newNumber;
  }
};
console.log(isHappyNumber(7));
