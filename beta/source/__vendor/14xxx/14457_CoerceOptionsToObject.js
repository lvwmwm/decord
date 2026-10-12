// Module ID: 14457
// Function ID: 14458
// Name: CoerceOptionsToObject
// Dependencies: [14458]
// Exports: CoerceOptionsToObject

// Module 14457 (CoerceOptionsToObject)
import _mod14458 from "module_14458" /* 14458 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14458.ToObject(arg0);
  }
};
