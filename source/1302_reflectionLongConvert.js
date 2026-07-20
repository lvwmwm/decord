// Module ID: 1302
// Function ID: 15206
// Name: reflectionLongConvert
// Dependencies: []

// Module 1302 (reflectionLongConvert)
arg5.reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (STRING(arg6[0]).LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (STRING(arg6[0]).LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
