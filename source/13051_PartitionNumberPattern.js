// Module ID: 13051
// Function ID: 99327
// Name: PartitionNumberPattern
// Dependencies: []
// Exports: PartitionNumberPattern

// Module 13051 (PartitionNumberPattern)
const _module = require(dependencyMap[0]);
let closure_2 = _module.__importDefault(require(dependencyMap[1]));
const _module1 = require(dependencyMap[0]);
let closure_3 = _module1.__importDefault(require(dependencyMap[2]));

export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
  let dataLocaleData;
  let formattedString;
  let pl;
  let roundedNumber;
  ({ pl, dataLocaleData } = internalSlots);
  let tmp = dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
  if (!tmp) {
    tmp = dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  }
  if (isNaN.isNaN()) {
    formattedString = tmp.nan;
    let num2 = 0;
    roundedNumber = isNaN;
    let num3 = 0;
  } else if (isNaN.isFinite()) {
    let timesResult1 = isNaN;
    let num5 = 0;
    let num6 = 0;
    if (!isNaN.isZero()) {
      require(dependencyMap[3]).invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      const ComputeExponentResult = require(dependencyMap[4]).ComputeExponent(internalSlots, timesResult);
      const first = ComputeExponentResult[0];
      num5 = ComputeExponentResult[1];
      timesResult1 = timesResult.times(mod.default.pow(10, -first));
      num6 = first;
      const _default = mod.default;
    }
    const result = require(dependencyMap[5]).FormatNumericToString(internalSlots, timesResult1);
    ({ formattedString, roundedNumber } = result);
    num2 = num5;
    num3 = num6;
  } else {
    formattedString = tmp.infinity;
    num2 = 0;
    roundedNumber = isNaN;
    num3 = 0;
  }
  const signDisplay = internalSlots.signDisplay;
  let num13 = 0;
  if ("never" !== signDisplay) {
    if ("auto" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num19 = 0;
      } else {
        num19 = -1;
      }
      num13 = num19;
    } else if ("always" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num18 = 1;
      } else {
        num18 = -1;
      }
      num13 = num18;
    } else if ("exceptZero" === signDisplay) {
      let num16 = 0;
      if (!roundedNumber.isZero()) {
        let num17 = 1;
        if (roundedNumber.isNegative()) {
          num17 = -1;
        }
        num16 = num17;
      }
      num13 = num16;
    } else {
      require(dependencyMap[3]).invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
      let num15 = 0;
      if (roundedNumber.isNegative()) {
        num15 = 0;
        if (!roundedNumber.isZero()) {
          num15 = -1;
        }
      }
      num13 = num15;
    }
  }
  const obj = { roundedNumber, formattedString, exponent: num3, magnitude: num2, sign: num13 };
  return closure_3.default(obj, internalSlots.dataLocaleData, pl, internalSlots);
};
