// Module ID: 16407
// Function ID: 16408
// Name: FormatNumericToParts
// Dependencies: [16403, 16375]
// Exports: FormatNumericToParts

// Module 16407 (FormatNumericToParts)
import ToString from "ToString" /* 16375 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16403 */;


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
