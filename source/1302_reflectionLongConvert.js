// Module ID: 1302
// Function ID: 15212
// Name: reflectionLongConvert
// Dependencies: [1297]

// Module 1302 (reflectionLongConvert)
const require = arg1;
const dependencyMap = arg6;
arg5.reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (require(1297) /* RepeatType */.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (require(1297) /* RepeatType */.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
