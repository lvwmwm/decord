// Module ID: 14547
// Function ID: 14548
// Name: FormatNumericToParts
// Dependencies: [14543, 14515]
// Exports: FormatNumericToParts

// Module 14547 (FormatNumericToParts)
import _mod14515 from "module_14515" /* 14515 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14543 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14515.ArrayCreate(0);
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
