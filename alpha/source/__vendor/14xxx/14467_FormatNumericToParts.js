// Module ID: 14467
// Function ID: 14468
// Name: FormatNumericToParts
// Dependencies: [14463, 14435]
// Exports: FormatNumericToParts

// Module 14467 (FormatNumericToParts)
import _mod14435 from "module_14435" /* 14435 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14463 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14435.ArrayCreate(0);
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
