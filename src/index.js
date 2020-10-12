module.exports = function check(str, bracketsConfig) {
  const strToArray = str.split('');
  bracketsConfig.forEach(item => {
    const openCount = strToArray.filter(s => s === item[0]).length;
    const closeCount = strToArray.filter(s => s === item[1]).length;
    if (openCount !== closeCount) return false;
  })
  return true;
}
