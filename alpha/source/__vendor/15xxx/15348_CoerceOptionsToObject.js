// Module ID: 15348
// Function ID: 15349
// Name: CoerceOptionsToObject
// Dependencies: [15349]
// Exports: CoerceOptionsToObject

// Module 15348 (CoerceOptionsToObject)
import _mod15349 from "module_15349" /* 15349 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15349.ToObject(arg0);
  }
};
