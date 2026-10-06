// Module ID: 13729
// Function ID: 13730
// Name: FormatNumericToParts
// Dependencies: [13725, 13697]
// Exports: FormatNumericToParts

// Module 13729 (FormatNumericToParts)
import _mod13697 from "module_13697" /* 13697 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 13725 */;


export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod13697.ArrayCreate(0);
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
