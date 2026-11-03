// Module ID: 16177
// Function ID: 16178
// Name: CoerceOptionsToObject
// Dependencies: [16178]
// Exports: CoerceOptionsToObject

// Module 16177 (CoerceOptionsToObject)
import _mod16178 from "module_16178" /* 16178 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16178.ToObject(arg0);
  }
}
