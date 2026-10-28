// Module ID: 15518
// Function ID: 15519
// Name: FormatNumericToParts
// Dependencies: [15514, 15486]
// Exports: FormatNumericToParts

// Module 15518 (FormatNumericToParts)
import _mod15486 from "module_15486" /* 15486 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15514 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15486.ArrayCreate(0);
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
