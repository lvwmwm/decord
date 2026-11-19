// Module ID: 15390
// Function ID: 15391
// Name: FormatNumericToParts
// Dependencies: [15386, 15358]
// Exports: FormatNumericToParts

// Module 15390 (FormatNumericToParts)
import ToString from "ToString" /* 15358 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15386 */;


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
