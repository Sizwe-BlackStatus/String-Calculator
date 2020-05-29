function strArray(str) {
  let strArr;
  let delimiter;
  if (/\n/g.test(str) == true && /\/\//g.test(str) == true) {
    delimiter = str.match(/(?<=\/\/).+(?=\n)/g).toString();
    delimiter = delimiter.replace(/\[|\]/g, " ").trim();
    strArr = str.match(/(?<=\n).+/g).toString();
    for (let i = 0; i <= delimiter.length; i++) {
      strArr = strArr.split(delimiter[i]).toString();
    }
    strArr = strArr.split(",");
  } else {
    strArr = str.split(/[,\n]/g);
  }
  return strArr;
}
function add(str) {
  let strInt = [];
  let strArr = strArray(str);
  let sum = 0;
  if (str == "") {
    return 0;
  }
  for (let i = 0; i < strArr.length; i++) {
    strInt[i] = parseInt(strArr[i]);
    strInt = strInt.filter((num) => num < 1000);
  }
  for (let i = 0; i < strInt.length; i++) {
    sum += strInt[i];
  }
  stringValidation(str);
  return sum;
}
function stringValidation(str) {
  if (str.match(/-\d/g)) {
    let negativeValues = str.match(/-\d/g);
    throw new Error(`negativeValues not allowed ${negativeValues}.`);
  }
  if (/[^\d]+$/g.test(str) == true) {
    throw new Error("ERROR: invalid input");
  }
  if (/(?:(?!\n)\s)/g.test(str)) {
    throw new Error("ERROR: invalid input");
  }
  if (/.+(?=\/\/)/g.test(str)) {
    throw new Error("ERROR: invalid input");
  }
}
module.exports = add;
