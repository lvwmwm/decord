// Module ID: 1217
// Function ID: 1218
// Name: reflectionLongConvert
// Dependencies: [1212]
// Exports: reflectionLongConvert

// Module 1217 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1212 */;


export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
