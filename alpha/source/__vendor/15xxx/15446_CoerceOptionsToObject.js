// Module ID: 15446
// Function ID: 15447
// Name: CoerceOptionsToObject
// Dependencies: [15447]
// Exports: CoerceOptionsToObject

// Module 15446 (CoerceOptionsToObject)
import _mod15447 from "module_15447" /* 15447 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15447.ToObject(arg0);
  }
};
