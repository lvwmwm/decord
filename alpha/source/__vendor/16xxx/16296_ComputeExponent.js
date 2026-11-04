// Module ID: 16296
// Function ID: 16297
// Name: ComputeExponent
// Dependencies: [1159, 16281, 16297, 16298]
// Exports: ComputeExponent

// Module 16296 (ComputeExponent)
import _mod16281 from "module_16281" /* 16281 */;
import ComputeExponentForMagnitude from "ComputeExponentForMagnitude" /* 16297 */;
import FormatNumericToString from "FormatNumericToString" /* 16298 */;
import module_1159 from "module_1159" /* 1159 */;

const module_16281 = module_1159.__importDefault(_mod16281);

export function ComputeExponent(internalSlots, timesResult) {
  if (timesResult.isZero()) {
    return [0, 0];
  } else {
    let negatedResult = timesResult;
    if (timesResult.isNegative()) {
      negatedResult = timesResult.negated();
    }
    const logResult = negatedResult.log(10);
    const floorResult = logResult.floor();
    const result = ComputeExponentForMagnitude.ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = module_16281.default;
    timesResult = negatedResult.times(_default.pow(10, -result));
    const result1 = FormatNumericToString.FormatNumericToString(internalSlots, timesResult);
    const roundedNumber = result1.roundedNumber;
    const tmp2 = require;
    if (roundedNumber.isZero()) {
      const items = [result, floorResult.toNumber()];
      return items;
    } else {
      const roundedNumber2 = result1.roundedNumber;
      const logResult1 = roundedNumber2.log(10);
      const floorResult1 = logResult1.floor();
      if (floorResult1.eq(floorResult.minus(result))) {
        const items1 = [result, floorResult.toNumber()];
        return items1;
      } else {
        const items2 = [tmp2(16297).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), ];
        const plusResult = floorResult.plus(1);
        items2[1] = plusResult.toNumber();
        return items2;
      }
    }
  }
}
