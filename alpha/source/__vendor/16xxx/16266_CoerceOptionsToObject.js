// Module ID: 16266
// Function ID: 16267
// Name: CoerceOptionsToObject
// Dependencies: [16267]
// Exports: CoerceOptionsToObject

// Module 16266 (CoerceOptionsToObject)
import _mod16267 from "module_16267" /* 16267 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16267.ToObject(arg0);
  }
}
