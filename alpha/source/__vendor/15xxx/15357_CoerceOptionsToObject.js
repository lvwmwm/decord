// Module ID: 15357
// Function ID: 15358
// Name: CoerceOptionsToObject
// Dependencies: [15358]
// Exports: CoerceOptionsToObject

// Module 15357 (CoerceOptionsToObject)
import ToString from "ToString" /* 15358 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
