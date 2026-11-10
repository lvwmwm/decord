// Module ID: 16374
// Function ID: 16375
// Name: CoerceOptionsToObject
// Dependencies: [16375]
// Exports: CoerceOptionsToObject

// Module 16374 (CoerceOptionsToObject)
import ToString from "ToString" /* 16375 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
