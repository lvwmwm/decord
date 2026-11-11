// Module ID: 16535
// Function ID: 16536
// Name: CoerceOptionsToObject
// Dependencies: [16536]
// Exports: CoerceOptionsToObject

// Module 16535 (CoerceOptionsToObject)
import ToString from "ToString" /* 16536 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
