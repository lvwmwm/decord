// Module ID: 15371
// Function ID: 15372
// Name: CoerceOptionsToObject
// Dependencies: [15372]
// Exports: CoerceOptionsToObject

// Module 15371 (CoerceOptionsToObject)
import ToString from "ToString" /* 15372 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
