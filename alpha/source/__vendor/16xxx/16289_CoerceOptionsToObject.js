// Module ID: 16289
// Function ID: 16290
// Name: CoerceOptionsToObject
// Dependencies: [16290]
// Exports: CoerceOptionsToObject

// Module 16289 (CoerceOptionsToObject)
import ToString from "ToString" /* 16290 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
