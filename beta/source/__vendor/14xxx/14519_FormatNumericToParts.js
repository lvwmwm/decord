// Module ID: 14519
// Function ID: 14520
// Name: FormatNumericToParts
// Dependencies: [14515, 14487]
// Exports: FormatNumericToParts

// Module 14519 (FormatNumericToParts)
import _mod14487 from "module_14487" /* 14487 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14515 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14487.ArrayCreate(0);
  if (0 < result.length) {
    do {
      let iter = result[num];
      let obj = { type: iter.type, value: iter.value };
      let arr = ArrayCreateResult.push(obj);
      num = num + 1;
      length = result.length;
    } while (num < length);
  }
  return ArrayCreateResult;
};
