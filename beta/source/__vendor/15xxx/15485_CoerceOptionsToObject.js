// Module ID: 15485
// Function ID: 15486
// Name: CoerceOptionsToObject
// Dependencies: [15486]
// Exports: CoerceOptionsToObject

// Module 15485 (CoerceOptionsToObject)
import _mod15486 from "module_15486" /* 15486 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15486.ToObject(arg0);
  }
};
