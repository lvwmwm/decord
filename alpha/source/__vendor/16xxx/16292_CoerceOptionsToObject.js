// Module ID: 16292
// Function ID: 16293
// Name: CoerceOptionsToObject
// Dependencies: [16293]
// Exports: CoerceOptionsToObject

// Module 16292 (CoerceOptionsToObject)
import _mod16293 from "module_16293" /* 16293 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16293.ToObject(arg0);
  }
}
