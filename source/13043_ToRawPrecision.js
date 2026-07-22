// Module ID: 13043
// Function ID: 99307
// Name: ToRawPrecision
// Dependencies: []
// Exports: ToRawPrecision

// Module 13043 (ToRawPrecision)
const _module = require(dependencyMap[0]);
let closure_2 = _module.__importDefault(require(dependencyMap[1]));

export const ToRawPrecision = function ToRawPrecision(isZero, arg1, exponent, result) {
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
    let repeatResult = require(dependencyMap[2]).repeat("0", exponent);
    let ZERO = require(dependencyMap[3]).ZERO;
    let num4 = 0;
  } else {
    const powResult1 = mod.default.pow(10, exponent - 1);
    const _default = mod.default;
    const _default2 = mod.default;
    const powResult = mod.default.pow(10, exponent);
    const divResult = isZero.div(powResult1);
    const logResult = isZero.div(powResult1).log(10);
    const plusResult = isZero.div(powResult1).log(10).plus(exponent);
    let ceilResult = isZero.div(powResult1).log(10).plus(exponent).minus(1).ceil();
    while (true) {
      let tmp6 = mod;
      let _default3 = mod.default;
      let minusResult1 = ceilResult.minus(exponent);
      let divResult1 = isZero.div(_default3.pow(10, minusResult1.plus(1)));
      floorResult = divResult1.floor();
      let tmp7 = ceilResult;
      let tmp8 = tmp5;
      if (floorResult.lessThan(powResult)) {
        tmp8 = tmp5;
        if (floorResult.greaterThanOrEqualTo(powResult1)) {
          let tmp9 = mod;
          let _default4 = mod.default;
          let minusResult2 = ceilResult.minus(exponent);
          timesResult = floorResult.times(_default4.pow(10, minusResult2.plus(1)));
          tmp8 = timesResult;
          if (timesResult.lessThanOrEqualTo(isZero)) {
            break;
          }
        }
      }
      ceilResult = ceilResult.minus(1);
      let tmp5 = tmp8;
      // continue
    }
    let obj = { n1: floorResult, e1: ceilResult, r1: timesResult };
    ({ e1, r1 } = obj);
    const powResult2 = mod.default.pow(10, exponent);
    const _default5 = mod.default;
    const _default6 = mod.default;
    const minusResult = isZero.div(powResult1).log(10).plus(exponent).minus(1);
    const powResult3 = mod.default.pow(10, exponent - 1);
    const divResult2 = isZero.div(powResult2);
    const logResult1 = isZero.div(powResult2).log(10);
    const plusResult1 = isZero.div(powResult2).log(10).plus(exponent);
    let floorResult1 = isZero.div(powResult2).log(10).plus(exponent).minus(1).floor();
    while (true) {
      let tmp15 = mod;
      let _default7 = mod.default;
      let minusResult4 = floorResult1.minus(exponent);
      let divResult3 = isZero.div(_default7.pow(10, minusResult4.plus(1)));
      ceilResult1 = divResult3.ceil();
      let tmp16 = floorResult1;
      let tmp17 = tmp14;
      if (ceilResult1.lessThan(powResult2)) {
        tmp17 = tmp14;
        if (ceilResult1.greaterThanOrEqualTo(powResult3)) {
          let tmp18 = mod;
          let _default8 = mod.default;
          let minusResult5 = floorResult1.minus(exponent);
          timesResult1 = ceilResult1.times(_default8.pow(10, minusResult5.plus(1)));
          tmp17 = timesResult1;
          if (timesResult1.greaterThanOrEqualTo(isZero)) {
            break;
          }
        }
      }
      floorResult1 = floorResult1.plus(1);
      let tmp14 = tmp17;
      // continue
    }
    obj = { n2: ceilResult1, e2: floorResult1, r2: timesResult1 };
    ({ n2, e2, r2 } = obj);
    result = require(dependencyMap[4]).ApplyUnsignedRoundingMode(isZero, r1, ZERO, result);
    if (result.eq(r1)) {
      num4 = e1.toNumber();
      ZERO = r1;
      n2 = obj.n1;
    } else {
      num4 = e2.toNumber();
    }
    repeatResult = n2.toString();
    const minusResult3 = isZero.div(powResult2).log(10).plus(exponent).minus(1);
  }
  if (num4 >= exponent - 1) {
    let sum = repeatResult + require(dependencyMap[2]).repeat("0", num4 - exponent + 1);
    let num8 = num4 + 1;
  } else if (num4 >= 0) {
    const text = `${arr.slice(0, num4 + 1)}.`;
    sum = `${arr.slice(0, num4 + 1)}.${arr.slice(arr.length - (exponent - (num4 + 1)))}`;
    num8 = num4 + 1;
  } else {
    require(dependencyMap[2]).invariant(num4 < 0, "e should be less than 0");
    sum = `0.${closure_0(closure_1[2]).repeat("0", -num4 - 1)}${arr}`;
    num8 = 1;
  }
  let substr1 = sum;
  if (sum.includes(".")) {
    substr1 = sum;
    if (exponent > arg1) {
      let diff = exponent - arg1;
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
