// Module ID: 15479
// Function ID: 15480
// Name: FormatNumericToParts
// Dependencies: [15475, 15447]
// Exports: FormatNumericToParts

// Module 15479 (FormatNumericToParts)
import _mod15447 from "module_15447" /* 15447 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15475 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15447.ArrayCreate(0);
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
