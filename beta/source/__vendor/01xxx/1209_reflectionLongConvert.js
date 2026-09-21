// Module ID: 1209
// Function ID: 1210
// Name: reflectionLongConvert
// Dependencies: [1204]
// Exports: reflectionLongConvert

// Module 1209 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1204 */;

require = arg1;
const dependencyMap = arg6;

export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
