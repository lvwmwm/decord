// Module ID: 16380
// Function ID: 16381
// Name: FormatNumericToParts
// Dependencies: [16376, 16348]
// Exports: FormatNumericToParts

// Module 16380 (FormatNumericToParts)
import ToString from "ToString" /* 16348 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16376 */;


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
