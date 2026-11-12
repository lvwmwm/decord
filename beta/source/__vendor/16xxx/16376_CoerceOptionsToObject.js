// Module ID: 16376
// Function ID: 16377
// Name: CoerceOptionsToObject
// Dependencies: [16377]
// Exports: CoerceOptionsToObject

// Module 16376 (CoerceOptionsToObject)
import ToString from "ToString" /* 16377 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
