// Module ID: 15475
// Function ID: 15476
// Name: FormatNumericToParts
// Dependencies: [15471, 15443]
// Exports: FormatNumericToParts

// Module 15475 (FormatNumericToParts)
import ToString from "ToString" /* 15443 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15471 */;


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
