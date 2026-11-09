// Module ID: 16347
// Function ID: 16348
// Name: CoerceOptionsToObject
// Dependencies: [16348]
// Exports: CoerceOptionsToObject

// Module 16347 (CoerceOptionsToObject)
import ToString from "ToString" /* 16348 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
