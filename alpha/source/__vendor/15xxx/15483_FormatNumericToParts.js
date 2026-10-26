// Module ID: 15483
// Function ID: 15484
// Name: FormatNumericToParts
// Dependencies: [15479, 15451]
// Exports: FormatNumericToParts

// Module 15483 (FormatNumericToParts)
import _mod15451 from "module_15451" /* 15451 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15479 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15451.ArrayCreate(0);
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
