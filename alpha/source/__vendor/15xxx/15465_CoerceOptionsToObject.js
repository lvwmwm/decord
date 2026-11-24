// Module ID: 15465
// Function ID: 15466
// Name: CoerceOptionsToObject
// Dependencies: [15466]
// Exports: CoerceOptionsToObject

// Module 15465 (CoerceOptionsToObject)
import ToString from "ToString" /* 15466 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
