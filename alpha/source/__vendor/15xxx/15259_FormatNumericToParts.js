// Module ID: 15259
// Function ID: 15260
// Name: FormatNumericToParts
// Dependencies: [15255, 15227]
// Exports: FormatNumericToParts

// Module 15259 (FormatNumericToParts)
import _mod15227 from "module_15227" /* 15227 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15255 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15227.ArrayCreate(0);
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
