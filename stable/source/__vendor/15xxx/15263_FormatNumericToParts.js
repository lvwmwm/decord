// Module ID: 15263
// Function ID: 15264
// Name: FormatNumericToParts
// Dependencies: [15259, 15231]
// Exports: FormatNumericToParts

// Module 15263 (FormatNumericToParts)
import _mod15231 from "module_15231" /* 15231 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15259 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15231.ArrayCreate(0);
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
