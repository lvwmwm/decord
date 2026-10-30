// Module ID: 15989
// Function ID: 15990
// Name: CoerceOptionsToObject
// Dependencies: [15990]
// Exports: CoerceOptionsToObject

// Module 15989 (CoerceOptionsToObject)
import _mod15990 from "module_15990" /* 15990 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15990.ToObject(arg0);
  }
}
