// Module ID: 13503
// Function ID: 13504
// Name: __exportStarResult13
// Dependencies: [1281, 13488, 13504, 13505]
// Exports: ComputeExponent

// Module 13503 (__exportStarResult13)
import e from "e";
import digitsToString from "digitsToString";


export const ComputeExponent = function ComputeExponent(internalSlots, timesResult) {
  if (timesResult.isZero()) {
    return [0, 0];
  } else {
    let negatedResult = timesResult;
    if (timesResult.isNegative()) {
      negatedResult = timesResult.negated();
    }
    const floorResult = negatedResult.log(10).floor();
    const result = require(13504) /* __exportStarResult14 */.ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = digitsToString.default;
    const logResult = negatedResult.log(10);
    const tmp2 = require;
    const result1 = require(13505) /* __exportStarResult21 */.FormatNumericToString(internalSlots, negatedResult.times(digitsToString.default.pow(10, -result)));
    const roundedNumber = result1.roundedNumber;
    if (roundedNumber.isZero()) {
      const items = [result, floorResult.toNumber()];
      return items;
    } else {
      const roundedNumber2 = result1.roundedNumber;
      const logResult1 = roundedNumber2.log(10);
      if (floorResult1.eq(floorResult.minus(result))) {
        const items1 = [result, floorResult.toNumber()];
        return items1;
      } else {
        const items2 = [tmp2(13504).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      floorResult1 = roundedNumber2.log(10).floor();
    }
    timesResult = negatedResult.times(digitsToString.default.pow(10, -result));
  }
};
