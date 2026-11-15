// Module ID: 16377
// Function ID: 16378
// Name: CoerceOptionsToObject
// Dependencies: [16378]
// Exports: CoerceOptionsToObject

// Module 16377 (CoerceOptionsToObject)
import ToString from "ToString" /* 16378 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
