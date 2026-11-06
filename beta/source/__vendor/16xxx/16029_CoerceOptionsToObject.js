// Module ID: 16029
// Function ID: 16030
// Name: CoerceOptionsToObject
// Dependencies: [16030]
// Exports: CoerceOptionsToObject

// Module 16029 (CoerceOptionsToObject)
import _mod16030 from "module_16030" /* 16030 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16030.ToObject(arg0);
  }
}
