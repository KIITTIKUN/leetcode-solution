const validParentheses = (string) => {
  if (string.length % 2 === 1) {
    return false;
  }
  while (true) {
    let oldString = string;
    string = string.replace('()', '');
    string = string.replace('{}', '');
    string = string.replace('[]', '');
    if (oldString === string) {
      break;
    }
  }
  return string === '';
};

console.log(validParentheses('(([]){})'));
