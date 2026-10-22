// Module ID: 15405
// Function ID: 15406
// Name: CoerceOptionsToObject
// Dependencies: [15406]
// Exports: CoerceOptionsToObject

// Module 15405 (CoerceOptionsToObject)
import _mod15406 from "module_15406" /* 15406 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15406.ToObject(arg0);
  }
};
