// Module ID: 13211
// Function ID: 101792
// Name: __exportStarResult28
// Dependencies: [1257, 13191, 13204, 13192]
// Exports: ToRawFixed

// Module 13211 (__exportStarResult28)
import createExporter from "createExporter";
import digitsToString from "digitsToString";

function ToRawFixedFn(timesResult1, maximumFractionDigits) {
  return timesResult1.times(digitsToString.default.pow(10, -maximumFractionDigits));
}
let result = digitsToString.default.set({ toExpPos: 100 });

export const ToRawFixed = function ToRawFixed(ZERO, minimumFractionDigits, maximumFractionDigits, roundingIncrement, result) {
  let n2;
  let r2;
  const _default = digitsToString.default;
  const timesResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits));
  const floorResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor();
  const divResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement);
  const timesResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor().times(roundingIncrement);
  let obj = { n1: timesResult1, r1: ToRawFixedFn(timesResult1, maximumFractionDigits) };
  const _default2 = digitsToString.default;
  const floorResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor();
  const timesResult2 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits));
  const ceilResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil();
  const divResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement);
  const timesResult3 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement).ceil().times(roundingIncrement);
  obj = { n2: timesResult3, r2: ToRawFixedFn(timesResult3, maximumFractionDigits) };
  ({ n2, r2 } = obj);
  result = require(13204) /* __exportStarResult11 */.ApplyUnsignedRoundingMode(ZERO, r1, r2, result);
  if (result.eq(obj.r1)) {
    n2 = obj.n1;
  }
  let str = "0";
  if (!n2.isZero()) {
    str = n2.toString();
  }
  if (0 !== maximumFractionDigits) {
    let sum = str;
    let sum1 = length2;
    if (str.length <= maximumFractionDigits) {
      sum = require(13192) /* setInternalSlot */.repeat("0", maximumFractionDigits - length2 + 1) + str;
      sum1 = maximumFractionDigits + 1;
    }
    const substr = sum.slice(0, sum1 - maximumFractionDigits);
    let text = `${arr3}.${arr2.slice(arr2.length - maximumFractionDigits)}`;
    let length = substr.length;
  } else {
    length = str.length;
    text = str;
  }
  let diff = maximumFractionDigits - minimumFractionDigits;
  let arr4 = text;
  if (diff > 0) {
    let arr5 = text;
    arr4 = text;
    if ("0" === text[text.length - 1]) {
      const substr1 = arr5.slice(0, arr5.length - 1);
      diff = diff - 1;
      arr4 = substr1;
      while (diff > 0) {
        arr5 = substr1;
        arr4 = substr1;
        if ("0" !== substr1[substr1.length - 1]) {
          break;
        }
      }
    }
  }
  let substr2 = arr4;
  if ("." === arr4[arr4.length - 1]) {
    substr2 = arr4.slice(0, arr4.length - 1);
  }
  const obj1 = { formattedString: substr2, roundedNumber: r2, integerDigitsCount: length, roundingMagnitude: -maximumFractionDigits };
  return obj1;
};
