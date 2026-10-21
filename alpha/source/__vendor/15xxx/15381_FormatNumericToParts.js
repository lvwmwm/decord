// Module ID: 15381
// Function ID: 15382
// Name: FormatNumericToParts
// Dependencies: [15377, 15349]
// Exports: FormatNumericToParts

// Module 15381 (FormatNumericToParts)
import _mod15349 from "module_15349" /* 15349 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15377 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15349.ArrayCreate(0);
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
