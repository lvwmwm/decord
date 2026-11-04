// Module ID: 16034
// Function ID: 16035
// Name: CoerceOptionsToObject
// Dependencies: [16035]
// Exports: CoerceOptionsToObject

// Module 16034 (CoerceOptionsToObject)
import _mod16035 from "module_16035" /* 16035 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16035.ToObject(arg0);
  }
}
