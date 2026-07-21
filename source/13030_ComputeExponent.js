// Module ID: 13030
// Function ID: 99244
// Name: ComputeExponent
// Dependencies: []
// Exports: ComputeExponent

// Module 13030 (ComputeExponent)
const _module = require(dependencyMap[0]);
let closure_2 = _module.__importDefault(require(dependencyMap[1]));

export const ComputeExponent = function ComputeExponent(internalSlots, timesResult) {
  if (timesResult.isZero()) {
    return [];
  } else {
    let negatedResult = timesResult;
    if (timesResult.isNegative()) {
      negatedResult = timesResult.negated();
    }
    const floorResult = negatedResult.log(10).floor();
    const result = require(dependencyMap[2]).ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = mod.default;
    const logResult = negatedResult.log(10);
    const result1 = require(dependencyMap[3]).FormatNumericToString(internalSlots, negatedResult.times(mod.default.pow(10, -result)));
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
        const items2 = [require(dependencyMap[2]).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      const floorResult1 = roundedNumber2.log(10).floor();
    }
    timesResult = negatedResult.times(mod.default.pow(10, -result));
  }
};
