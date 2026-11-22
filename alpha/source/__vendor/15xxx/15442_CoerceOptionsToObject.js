// Module ID: 15442
// Function ID: 15443
// Name: CoerceOptionsToObject
// Dependencies: [15443]
// Exports: CoerceOptionsToObject

// Module 15442 (CoerceOptionsToObject)
import ToString from "ToString" /* 15443 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
