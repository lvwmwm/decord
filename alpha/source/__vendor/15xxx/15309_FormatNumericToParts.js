// Module ID: 15309
// Function ID: 15310
// Name: FormatNumericToParts
// Dependencies: [15305, 15277]
// Exports: FormatNumericToParts

// Module 15309 (FormatNumericToParts)
import _mod15277 from "module_15277" /* 15277 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15305 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15277.ArrayCreate(0);
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
