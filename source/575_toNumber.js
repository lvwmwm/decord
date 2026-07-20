// Module ID: 575
// Function ID: 6958
// Name: toNumber
// Dependencies: [577, 596, 578]

// Module 575 (toNumber)
let closure_2 = /^[-+]0x[0-9a-f]+$/i;
let closure_3 = /^0b[01]+$/i;
let closure_4 = /^0o[0-7]+$/i;

export default function toNumber(arg0) {
  if ("number" === typeof arg0) {
    return arg0;
  } else if (require(dependencyMap[0])(arg0)) {
    const _NaN2 = NaN;
    return NaN;
  } else {
    let tmp3 = arg0;
    if (require(dependencyMap[1])(arg0)) {
      let valueOfResult = arg0;
      if ("function" === typeof arg0.valueOf) {
        valueOfResult = arg0.valueOf();
      }
      let text = valueOfResult;
      if (require(dependencyMap[1])(valueOfResult)) {
        text = `${tmp4}`;
      }
      tmp3 = text;
    }
    if ("string" !== typeof tmp3) {
      let tmp14 = tmp3;
      if (0 !== tmp3) {
        tmp14 = +tmp3;
      }
      return tmp14;
    } else {
      const arr = require(dependencyMap[2])(tmp3);
      const isMatch = regex2.test(arr);
      if (!isMatch) {
        if (!regex3.test(arr)) {
          if (regex.test(arr)) {
            let _NaN = NaN;
          } else {
            _NaN = +arr;
          }
        }
        return _NaN;
      }
      let num2 = 8;
      const substr = arr.slice(2);
      if (isMatch) {
        num2 = 2;
      }
      _NaN = parseInt(substr, num2);
      const tmp12 = parseInt;
    }
  }
};
