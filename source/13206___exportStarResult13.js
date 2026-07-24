// Module ID: 13206
// Function ID: 101782
// Name: __exportStarResult13
// Dependencies: [1257, 13191, 13207, 13208]
// Exports: ComputeExponent

// Module 13206 (__exportStarResult13)
import createExporter from "createExporter";
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
    const result = require(13207) /* __exportStarResult14 */.ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = digitsToString.default;
    const logResult = negatedResult.log(10);
    const result1 = require(13208) /* __exportStarResult21 */.FormatNumericToString(internalSlots, negatedResult.times(digitsToString.default.pow(10, -result)));
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
        const items2 = [require(13207) /* __exportStarResult14 */.ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      floorResult1 = roundedNumber2.log(10).floor();
    }
    timesResult = negatedResult.times(digitsToString.default.pow(10, -result));
  }
};
