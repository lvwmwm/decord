// Module ID: 13028
// Function ID: 99231
// Name: ToRawFixedFn
// Dependencies: []
// Exports: ToRawFixed

// Module 13028 (ToRawFixedFn)
function ToRawFixedFn(timesResult1, maximumFractionDigits) {
  return timesResult1.times(__importDefaultResult.default.pow(10, -maximumFractionDigits));
}
const _module = require(dependencyMap[0]);
const __importDefaultResult = _module.__importDefault(require(dependencyMap[1]));
const result = __importDefaultResult.default.set({ toExpPos: 100 });

export const ToRawFixed = function ToRawFixed(ZERO, minimumFractionDigits, maximumFractionDigits, roundingIncrement, result) {
  let n2;
  let r2;
  const _default = __importDefaultResult.default;
  const timesResult = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits));
  const floorResult = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).floor();
  const divResult = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement);
  const timesResult1 = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor().times(roundingIncrement);
  let obj = { n1: timesResult1, r1: ToRawFixedFn(timesResult1, maximumFractionDigits) };
  const _default2 = __importDefaultResult.default;
  const floorResult1 = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor();
  const timesResult2 = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits));
  const ceilResult = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).ceil();
  const divResult1 = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement);
  const timesResult3 = ZERO.times(__importDefaultResult.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement).ceil().times(roundingIncrement);
  obj = { n2: timesResult3, r2: ToRawFixedFn(timesResult3, maximumFractionDigits) };
  ({ n2, r2 } = obj);
  result = require(dependencyMap[2]).ApplyUnsignedRoundingMode(ZERO, r1, r2, result);
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
      sum = require(dependencyMap[3]).repeat("0", maximumFractionDigits - length2 + 1) + str;
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
