// Module ID: 13301
// Function ID: 13302
// Name: __exportStarResult20
// Dependencies: [13297, 13269]

// Module 13301 (__exportStarResult20)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = require(13297) /* __exportStarResult24 */.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = require(13269) /* __exportStarResult32 */.ArrayCreate(0);
  if (0 < result.length) {
    do {
      let iter = result[num];
      let obj = { type: null, value: null };
      obj[0] = iter.type;
      obj[1] = iter.value;
      let arr = ArrayCreateResult.push(obj);
      num = num + 1;
      length = result.length;
    } while (num < length);
  }
  return ArrayCreateResult;
};
