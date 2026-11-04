// Module ID: 16299
// Function ID: 16300
// Name: FormatNumericToParts
// Dependencies: [16295, 16267]
// Exports: FormatNumericToParts

// Module 16299 (FormatNumericToParts)
import _mod16267 from "module_16267" /* 16267 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16295 */;


export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod16267.ArrayCreate(0);
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
