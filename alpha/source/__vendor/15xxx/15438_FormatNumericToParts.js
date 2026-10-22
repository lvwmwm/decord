// Module ID: 15438
// Function ID: 15439
// Name: FormatNumericToParts
// Dependencies: [15434, 15406]
// Exports: FormatNumericToParts

// Module 15438 (FormatNumericToParts)
import _mod15406 from "module_15406" /* 15406 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15434 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15406.ArrayCreate(0);
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
