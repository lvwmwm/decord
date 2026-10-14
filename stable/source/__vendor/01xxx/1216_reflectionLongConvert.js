// Module ID: 1216
// Function ID: 1217
// Name: reflectionLongConvert
// Dependencies: [1211]
// Exports: reflectionLongConvert

// Module 1216 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1211 */;


export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
