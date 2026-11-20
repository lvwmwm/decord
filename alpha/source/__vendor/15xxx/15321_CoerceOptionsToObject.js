// Module ID: 15321
// Function ID: 15322
// Name: CoerceOptionsToObject
// Dependencies: [15322]
// Exports: CoerceOptionsToObject

// Module 15321 (CoerceOptionsToObject)
import ToString from "ToString" /* 15322 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
