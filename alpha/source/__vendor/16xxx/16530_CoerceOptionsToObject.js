// Module ID: 16530
// Function ID: 16531
// Name: CoerceOptionsToObject
// Dependencies: [16531]
// Exports: CoerceOptionsToObject

// Module 16530 (CoerceOptionsToObject)
import ToString from "ToString" /* 16531 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
