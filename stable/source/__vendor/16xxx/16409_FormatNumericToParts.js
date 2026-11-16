// Module ID: 16409
// Function ID: 16410
// Name: FormatNumericToParts
// Dependencies: [16405, 16377]
// Exports: FormatNumericToParts

// Module 16409 (FormatNumericToParts)
import ToString from "ToString" /* 16377 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16405 */;


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
