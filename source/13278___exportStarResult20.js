// Module ID: 13278
// Function ID: 102128
// Name: __exportStarResult20
// Dependencies: [13274, 13246]

// Module 13278 (__exportStarResult20)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  let num = 0;
  const result = require(13274) /* __exportStarResult24 */.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  const ArrayCreateResult = require(13246) /* __exportStarResult32 */.ArrayCreate(0);
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
