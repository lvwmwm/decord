// Module ID: 16655
// Function ID: 16656
// Name: CoerceOptionsToObject
// Dependencies: [16656]
// Exports: CoerceOptionsToObject

// Module 16655 (CoerceOptionsToObject)
import ToString from "ToString" /* 16656 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
