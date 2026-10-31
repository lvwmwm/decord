// Module ID: 16063
// Function ID: 16064
// Name: FormatNumericToParts
// Dependencies: [16059, 16031]
// Exports: FormatNumericToParts

// Module 16063 (FormatNumericToParts)
import _mod16031 from "module_16031" /* 16031 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16059 */;


export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod16031.ArrayCreate(0);
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
}
