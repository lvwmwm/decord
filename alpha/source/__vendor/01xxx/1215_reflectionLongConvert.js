// Module ID: 1215
// Function ID: 1216
// Name: reflectionLongConvert
// Dependencies: [1210]
// Exports: reflectionLongConvert

// Module 1215 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1210 */;


export function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
}
