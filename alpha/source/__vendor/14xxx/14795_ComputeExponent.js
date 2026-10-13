// Module ID: 14795
// Function ID: 14796
// Name: ComputeExponent
// Dependencies: [1172, 14780, 14796, 14797]
// Exports: ComputeExponent

// Module 14795 (ComputeExponent)
import _mod14780 from "module_14780" /* 14780 */;
import ComputeExponentForMagnitude from "ComputeExponentForMagnitude" /* 14796 */;
import FormatNumericToString from "FormatNumericToString" /* 14797 */;
import module_1172 from "module_1172" /* 1172 */;

const module_14780 = module_1172.__importDefault(_mod14780);

export const ComputeExponent = function ComputeExponent(internalSlots, timesResult) {
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
    const _default = module_14780.default;
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
        const items2 = [tmp2(14796).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), ];
        const plusResult = floorResult.plus(1);
        items2[1] = plusResult.toNumber();
        return items2;
      }
    }
  }
};
