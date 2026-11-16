// Module ID: 16653
// Function ID: 16654
// Name: CoerceOptionsToObject
// Dependencies: [16654]
// Exports: CoerceOptionsToObject

// Module 16653 (CoerceOptionsToObject)
import ToString from "ToString" /* 16654 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
