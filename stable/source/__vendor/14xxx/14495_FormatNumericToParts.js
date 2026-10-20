// Module ID: 14495
// Function ID: 14496
// Name: FormatNumericToParts
// Dependencies: [14491, 14463]
// Exports: FormatNumericToParts

// Module 14495 (FormatNumericToParts)
import _mod14463 from "module_14463" /* 14463 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14491 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14463.ArrayCreate(0);
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
