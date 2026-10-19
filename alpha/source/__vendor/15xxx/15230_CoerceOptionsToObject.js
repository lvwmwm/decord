// Module ID: 15230
// Function ID: 15231
// Name: CoerceOptionsToObject
// Dependencies: [15231]
// Exports: CoerceOptionsToObject

// Module 15230 (CoerceOptionsToObject)
import _mod15231 from "module_15231" /* 15231 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15231.ToObject(arg0);
  }
};
