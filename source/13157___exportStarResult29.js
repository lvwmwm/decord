// Module ID: 13157
// Function ID: 101463
// Name: __exportStarResult29
// Dependencies: [1257, 13138, 13139, 13141, 13151]
// Exports: ToRawPrecision

// Module 13157 (__exportStarResult29)
import createExporter from "createExporter";
import digitsToString from "digitsToString";


export const ToRawPrecision = function ToRawPrecision(isZero, arg1, closure_0, result) {
  let ceilResult1;
  let e1;
  let e2;
  let floorResult;
  let n2;
  let r1;
  let r2;
  let timesResult;
  let timesResult1;
  if (isZero.isZero()) {
    let repeatResult = require(13139) /* setInternalSlot */.repeat("0", closure_0);
    let ZERO = require(13141) /* TEN */.ZERO;
    let num4 = 0;
  } else {
    const powResult1 = digitsToString.default.pow(10, closure_0 - 1);
    const _default = digitsToString.default;
    const _default2 = digitsToString.default;
    const powResult = digitsToString.default.pow(10, closure_0);
    const divResult = isZero.div(powResult1);
    const logResult = isZero.div(powResult1).log(10);
    const plusResult = isZero.div(powResult1).log(10).plus(closure_0);
    let ceilResult = isZero.div(powResult1).log(10).plus(closure_0).minus(1).ceil();
    while (true) {
      let tmp6 = digitsToString;
      let _default3 = digitsToString.default;
      let minusResult1 = ceilResult.minus(closure_0);
      let divResult1 = isZero.div(_default3.pow(10, minusResult1.plus(1)));
      floorResult = divResult1.floor();
      let tmp7 = ceilResult;
      let tmp8 = tmp5;
      if (floorResult.lessThan(powResult)) {
        tmp8 = tmp5;
        if (floorResult.greaterThanOrEqualTo(powResult1)) {
          let tmp9 = digitsToString;
          let _default4 = digitsToString.default;
          let minusResult2 = ceilResult.minus(closure_0);
          timesResult = floorResult.times(_default4.pow(10, minusResult2.plus(1)));
          tmp8 = timesResult;
          if (timesResult.lessThanOrEqualTo(isZero)) {
            break;
          }
        }
      }
      ceilResult = ceilResult.minus(1);
      tmp5 = tmp8;
      continue;
    }
    let obj = { n1: floorResult, e1: ceilResult, r1: timesResult };
    ({ e1, r1 } = obj);
    const powResult2 = digitsToString.default.pow(10, closure_0);
    const _default5 = digitsToString.default;
    const _default6 = digitsToString.default;
    const minusResult = isZero.div(powResult1).log(10).plus(closure_0).minus(1);
    const powResult3 = digitsToString.default.pow(10, closure_0 - 1);
    const divResult2 = isZero.div(powResult2);
    const logResult1 = isZero.div(powResult2).log(10);
    const plusResult1 = isZero.div(powResult2).log(10).plus(closure_0);
    let floorResult1 = isZero.div(powResult2).log(10).plus(closure_0).minus(1).floor();
    while (true) {
      let tmp15 = digitsToString;
      let _default7 = digitsToString.default;
      let minusResult4 = floorResult1.minus(closure_0);
      let divResult3 = isZero.div(_default7.pow(10, minusResult4.plus(1)));
      ceilResult1 = divResult3.ceil();
      let tmp16 = floorResult1;
      let tmp17 = tmp14;
      if (ceilResult1.lessThan(powResult2)) {
        tmp17 = tmp14;
        if (ceilResult1.greaterThanOrEqualTo(powResult3)) {
          let tmp18 = digitsToString;
          let _default8 = digitsToString.default;
          let minusResult5 = floorResult1.minus(closure_0);
          timesResult1 = ceilResult1.times(_default8.pow(10, minusResult5.plus(1)));
          tmp17 = timesResult1;
          if (timesResult1.greaterThanOrEqualTo(isZero)) {
            break;
          }
        }
      }
      floorResult1 = floorResult1.plus(1);
      tmp14 = tmp17;
      continue;
    }
    obj = { n2: ceilResult1, e2: floorResult1, r2: timesResult1 };
    ({ n2, e2, r2 } = obj);
    result = require(13151) /* __exportStarResult11 */.ApplyUnsignedRoundingMode(isZero, r1, ZERO, result);
    if (result.eq(r1)) {
      num4 = e1.toNumber();
      ZERO = r1;
      n2 = obj.n1;
    } else {
      num4 = e2.toNumber();
    }
    repeatResult = n2.toString();
    const minusResult3 = isZero.div(powResult2).log(10).plus(closure_0).minus(1);
  }
  if (num4 >= closure_0 - 1) {
    let sum = repeatResult + require(13139) /* setInternalSlot */.repeat("0", num4 - closure_0 + 1);
    let num8 = num4 + 1;
  } else if (num4 >= 0) {
    const text = `${arr.slice(0, num4 + 1)}.`;
    sum = `${arr.slice(0, num4 + 1)}.${arr.slice(arr.length - (closure_0 - (num4 + 1)))}`;
    num8 = num4 + 1;
  } else {
    require(13139) /* setInternalSlot */.invariant(num4 < 0, "e should be less than 0");
    sum = `0.${require(13139) /* setInternalSlot */.repeat("0", -num4 - 1)}${arr}`;
    num8 = 1;
  }
  let substr1 = sum;
  if (sum.includes(".")) {
    substr1 = sum;
    if (closure_0 > arg1) {
      let diff = closure_0 - arg1;
      let arr4 = sum;
      if (diff > 0) {
        let arr3 = sum;
        arr4 = sum;
        if ("0" === sum[sum.length - 1]) {
          const substr = arr3.slice(0, arr3.length - 1);
          diff = diff - 1;
          arr4 = substr;
          while (diff > 0) {
            arr3 = substr;
            arr4 = substr;
            if ("0" !== substr[substr.length - 1]) {
              break;
            }
          }
        }
      }
      substr1 = arr4;
      if ("." === arr4[arr4.length - 1]) {
        substr1 = arr4.slice(0, arr4.length - 1);
      }
    }
  }
  const obj1 = { formattedString: substr1, roundedNumber: ZERO, integerDigitsCount: num8, roundingMagnitude: num4 };
  return obj1;
};
