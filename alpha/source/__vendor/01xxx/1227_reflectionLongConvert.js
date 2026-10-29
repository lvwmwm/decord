// Module ID: 1227
// Function ID: 1228
// Name: reflectionLongConvert
// Dependencies: [1222]
// Exports: reflectionLongConvert

// Module 1227 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1222 */;


export function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
}
