// Module ID: 1228
// Function ID: 1229
// Name: reflectionLongConvert
// Dependencies: [1223]
// Exports: reflectionLongConvert

// Module 1228 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1223 */;


export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
