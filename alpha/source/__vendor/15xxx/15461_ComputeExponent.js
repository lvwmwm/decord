// Module ID: 15461
// Function ID: 15462
// Name: ComputeExponent
// Dependencies: [1158, 15446, 15462, 15463]
// Exports: ComputeExponent

// Module 15461 (ComputeExponent)
import _mod15446 from "module_15446" /* 15446 */;
import ComputeExponentForMagnitude from "ComputeExponentForMagnitude" /* 15462 */;
import FormatNumericToString from "FormatNumericToString" /* 15463 */;
import module_1158 from "module_1158" /* 1158 */;

const module_15446 = module_1158.__importDefault(_mod15446);

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
    const _default = module_15446.default;
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
        const items2 = [tmp2(15462).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), ];
        const plusResult = floorResult.plus(1);
        items2[1] = plusResult.toNumber();
        return items2;
      }
    }
  }
}
