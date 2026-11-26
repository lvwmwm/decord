// Module ID: 15456
// Function ID: 15457
// Name: CoerceOptionsToObject
// Dependencies: [15457]
// Exports: CoerceOptionsToObject

// Module 15456 (CoerceOptionsToObject)
import ToString from "ToString" /* 15457 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
