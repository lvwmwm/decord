// Module ID: 16370
// Function ID: 16371
// Name: FormatNumericToParts
// Dependencies: [16366, 16338]
// Exports: FormatNumericToParts

// Module 16370 (FormatNumericToParts)
import ToString from "ToString" /* 16338 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16366 */;


export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = ToString.ArrayCreate(0);
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
