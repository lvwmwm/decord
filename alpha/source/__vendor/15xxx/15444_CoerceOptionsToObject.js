// Module ID: 15444
// Function ID: 15445
// Name: CoerceOptionsToObject
// Dependencies: [15445]
// Exports: CoerceOptionsToObject

// Module 15444 (CoerceOptionsToObject)
import ToString from "ToString" /* 15445 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
