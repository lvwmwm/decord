// Module ID: 15587
// Function ID: 15588
// Name: CoerceOptionsToObject
// Dependencies: [15588]
// Exports: CoerceOptionsToObject

// Module 15587 (CoerceOptionsToObject)
import ToString from "ToString" /* 15588 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
