// Module ID: 1230
// Function ID: 1231
// Name: reflectionLongConvert
// Dependencies: [1225]
// Exports: reflectionLongConvert

// Module 1230 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1225 */;


export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
