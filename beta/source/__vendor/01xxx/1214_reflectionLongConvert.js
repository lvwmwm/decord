// Module ID: 1214
// Function ID: 1215
// Name: reflectionLongConvert
// Dependencies: [1209]
// Exports: reflectionLongConvert

// Module 1214 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1209 */;


export function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
}
