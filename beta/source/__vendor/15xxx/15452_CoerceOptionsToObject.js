// Module ID: 15452
// Function ID: 15453
// Name: CoerceOptionsToObject
// Dependencies: [15453]
// Exports: CoerceOptionsToObject

// Module 15452 (CoerceOptionsToObject)
import ToString from "ToString" /* 15453 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
