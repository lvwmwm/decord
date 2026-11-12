// Module ID: 16563
// Function ID: 16564
// Name: FormatNumericToParts
// Dependencies: [16559, 16531]
// Exports: FormatNumericToParts

// Module 16563 (FormatNumericToParts)
import ToString from "ToString" /* 16531 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16559 */;


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
