// Module ID: 16062
// Function ID: 16063
// Name: FormatNumericToParts
// Dependencies: [16058, 16030]
// Exports: FormatNumericToParts

// Module 16062 (FormatNumericToParts)
import _mod16030 from "module_16030" /* 16030 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16058 */;


export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod16030.ArrayCreate(0);
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
