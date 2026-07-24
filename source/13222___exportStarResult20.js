// Module ID: 13222
// Function ID: 101823
// Name: __exportStarResult20
// Dependencies: [13218, 13190]

// Module 13222 (__exportStarResult20)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  let num = 0;
  const result = require(13218) /* __exportStarResult24 */.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  const ArrayCreateResult = require(13190) /* __exportStarResult32 */.ArrayCreate(0);
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
