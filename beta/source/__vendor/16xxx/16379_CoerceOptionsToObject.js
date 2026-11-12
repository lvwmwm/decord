// Module ID: 16379
// Function ID: 16380
// Name: CoerceOptionsToObject
// Dependencies: [16380]
// Exports: CoerceOptionsToObject

// Module 16379 (CoerceOptionsToObject)
import ToString from "ToString" /* 16380 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
