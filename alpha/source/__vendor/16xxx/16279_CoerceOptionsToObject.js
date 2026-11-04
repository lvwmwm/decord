// Module ID: 16279
// Function ID: 16280
// Name: CoerceOptionsToObject
// Dependencies: [16280]
// Exports: CoerceOptionsToObject

// Module 16279 (CoerceOptionsToObject)
import _mod16280 from "module_16280" /* 16280 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16280.ToObject(arg0);
  }
}
