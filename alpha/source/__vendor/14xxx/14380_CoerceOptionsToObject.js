// Module ID: 14380
// Function ID: 14381
// Name: CoerceOptionsToObject
// Dependencies: [14381]
// Exports: CoerceOptionsToObject

// Module 14380 (CoerceOptionsToObject)
import _mod14381 from "module_14381" /* 14381 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14381.ToObject(arg0);
  }
};
