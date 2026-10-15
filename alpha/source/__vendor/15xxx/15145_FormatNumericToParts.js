// Module ID: 15145
// Function ID: 15146
// Name: FormatNumericToParts
// Dependencies: [15141, 15113]
// Exports: FormatNumericToParts

// Module 15145 (FormatNumericToParts)
import _mod15113 from "module_15113" /* 15113 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15141 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15113.ArrayCreate(0);
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
};
