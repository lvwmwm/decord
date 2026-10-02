// Module ID: 13713
// Function ID: 13714
// Name: ComputeExponent
// Dependencies: [1173, 13698, 13714, 13715]
// Exports: ComputeExponent

// Module 13713 (ComputeExponent)
import _mod13698 from "module_13698" /* 13698 */;
import ComputeExponentForMagnitude from "ComputeExponentForMagnitude" /* 13714 */;
import FormatNumericToString from "FormatNumericToString" /* 13715 */;
import module_1173 from "module_1173" /* 1173 */;

const module_13698 = module_1173.__importDefault(_mod13698);

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
    const _default = module_13698.default;
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
        const items2 = [tmp2(13714).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), ];
        const plusResult = floorResult.plus(1);
        items2[1] = plusResult.toNumber();
        return items2;
      }
    }
  }
};
