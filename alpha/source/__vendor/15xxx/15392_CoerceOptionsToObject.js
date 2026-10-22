// Module ID: 15392
// Function ID: 15393
// Name: CoerceOptionsToObject
// Dependencies: [15393]
// Exports: CoerceOptionsToObject

// Module 15392 (CoerceOptionsToObject)
import _mod15393 from "module_15393" /* 15393 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15393.ToObject(arg0);
  }
};
