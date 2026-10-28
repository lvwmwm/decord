// Module ID: 15746
// Function ID: 15747
// Name: FormatNumericToParts
// Dependencies: [15742, 15714]
// Exports: FormatNumericToParts

// Module 15746 (FormatNumericToParts)
import _mod15714 from "module_15714" /* 15714 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15742 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15714.ArrayCreate(0);
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
