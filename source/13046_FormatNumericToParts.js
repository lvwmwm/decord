// Module ID: 13046
// Function ID: 99285
// Name: FormatNumericToParts
// Dependencies: []

// Module 13046 (FormatNumericToParts)
arg5.FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  let num = 0;
  const result = isNaN(arg6[0]).PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  const ArrayCreateResult = isNaN(arg6[1]).ArrayCreate(0);
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
