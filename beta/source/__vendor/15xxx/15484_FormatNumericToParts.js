// Module ID: 15484
// Function ID: 15485
// Name: FormatNumericToParts
// Dependencies: [15480, 15452]
// Exports: FormatNumericToParts

// Module 15484 (FormatNumericToParts)
import _mod15452 from "module_15452" /* 15452 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15480 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15452.ArrayCreate(0);
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
