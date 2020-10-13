module.exports = function check(str, bracketsConfig) {
  const strToArray = str.split('');
  if(strToArray.length % 2 !==0) return false;

  let openBrackets = [];
  let closeBrackets = [];
  let currentBrackets = [];

  bracketsConfig.forEach(array => {
    openBrackets.push(array[0]);
    closeBrackets.push(array[1]);
  });

  for (let i = 0; i < strToArray.length; i++) {
    if (openBrackets.includes(strToArray[i]) && closeBrackets.includes(strToArray[i])) {
      if (!currentBrackets.includes(strToArray[i])) {
        currentBrackets.push(strToArray[i]);
      } else if (currentBrackets.pop() === strToArray[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      if (openBrackets.includes(strToArray[i])) {
        currentBrackets.push(strToArray[i]);
      } else if (openBrackets.indexOf(currentBrackets.pop()) === closeBrackets.indexOf(strToArray[i])) { continue; }
      else {
        return false;
      }
    }
  }

  return true;
}
