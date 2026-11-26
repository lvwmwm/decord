// Module ID: 15638
// Function ID: 15639
// Name: CoerceOptionsToObject
// Dependencies: [15639]
// Exports: CoerceOptionsToObject

// Module 15638 (CoerceOptionsToObject)
import ToString from "ToString" /* 15639 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
