// Module ID: 16688
// Function ID: 16689
// Name: FormatNumericToParts
// Dependencies: [16684, 16656]
// Exports: FormatNumericToParts

// Module 16688 (FormatNumericToParts)
import ToString from "ToString" /* 16656 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16684 */;


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
