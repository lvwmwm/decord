// Module ID: 14586
// Function ID: 14587
// Name: ComputeExponent
// Dependencies: [1161, 14571, 14587, 14588]
// Exports: ComputeExponent

// Module 14586 (ComputeExponent)
import digitsToString2 from "digitsToString" /* 14571 */;
import ComputeExponentForMagnitude from "ComputeExponentForMagnitude" /* 14587 */;
import FormatNumericToString from "FormatNumericToString" /* 14588 */;
import e from "e" /* 1161 */;

const digitsToString = e.__importDefault(digitsToString2);

export const ComputeExponent = function ComputeExponent(internalSlots, timesResult) {
  if (timesResult.isZero()) {
    return [0, 0];
  } else {
    let negatedResult = timesResult;
    if (timesResult.isNegative()) {
      negatedResult = timesResult.negated();
    }
    const floorResult = negatedResult.log(10).floor();
    const result = ComputeExponentForMagnitude.ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = digitsToString.default;
    const logResult = negatedResult.log(10);
    const tmp2 = require;
    const result1 = FormatNumericToString.FormatNumericToString(internalSlots, negatedResult.times(digitsToString.default.pow(10, -result)));
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
        const items2 = [tmp2(14587).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      floorResult1 = roundedNumber2.log(10).floor();
    }
    timesResult = negatedResult.times(digitsToString.default.pow(10, -result));
  }
};
