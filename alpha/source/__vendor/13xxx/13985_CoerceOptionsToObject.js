// Module ID: 13985
// Function ID: 13986
// Name: CoerceOptionsToObject
// Dependencies: [13986]
// Exports: CoerceOptionsToObject

// Module 13985 (CoerceOptionsToObject)
import _mod13986 from "module_13986" /* 13986 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13986.ToObject(arg0);
  }
};
