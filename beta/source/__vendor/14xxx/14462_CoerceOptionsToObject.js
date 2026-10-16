// Module ID: 14462
// Function ID: 14463
// Name: CoerceOptionsToObject
// Dependencies: [14463]
// Exports: CoerceOptionsToObject

// Module 14462 (CoerceOptionsToObject)
import _mod14463 from "module_14463" /* 14463 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14463.ToObject(arg0);
  }
};
