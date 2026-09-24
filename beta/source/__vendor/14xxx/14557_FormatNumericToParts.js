// Module ID: 14557
// Function ID: 14558
// Name: FormatNumericToParts
// Dependencies: [14553, 14525]
// Exports: FormatNumericToParts

// Module 14557 (FormatNumericToParts)
import _mod14525 from "module_14525" /* 14525 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14553 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14525.ArrayCreate(0);
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
