// Module ID: 16337
// Function ID: 16338
// Name: CoerceOptionsToObject
// Dependencies: [16338]
// Exports: CoerceOptionsToObject

// Module 16337 (CoerceOptionsToObject)
import ToString from "ToString" /* 16338 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
