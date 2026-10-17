// Module ID: 15226
// Function ID: 15227
// Name: CoerceOptionsToObject
// Dependencies: [15227]
// Exports: CoerceOptionsToObject

// Module 15226 (CoerceOptionsToObject)
import _mod15227 from "module_15227" /* 15227 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15227.ToObject(arg0);
  }
};
