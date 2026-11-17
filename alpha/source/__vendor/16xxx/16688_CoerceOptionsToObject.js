// Module ID: 16688
// Function ID: 16689
// Name: CoerceOptionsToObject
// Dependencies: [16689]
// Exports: CoerceOptionsToObject

// Module 16688 (CoerceOptionsToObject)
import ToString from "ToString" /* 16689 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
