// Module ID: 575
// Function ID: 6958
// Name: toNumber
// Dependencies: [576, 573, 584]

// Module 575 (toNumber)
const re2 = /^[-+]0x[0-9a-f]+$/i;
const re3 = /^0b[01]+$/i;
const re4 = /^0o[0-7]+$/i;

export default function toNumber(arg0) {
  if ("number" === typeof arg0) {
    return arg0;
  } else if (require(576) /* isSymbol */(arg0)) {
    const _NaN2 = NaN;
    return NaN;
  } else {
    let tmp3 = arg0;
    if (require(573) /* isObject */(arg0)) {
      let valueOfResult = arg0;
      if ("function" === typeof arg0.valueOf) {
        valueOfResult = arg0.valueOf();
      }
      let text = valueOfResult;
      if (require(573) /* isObject */(valueOfResult)) {
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
      const arr = require(584) /* baseTrim */(tmp3);
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
