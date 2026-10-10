// Module ID: 14434
// Function ID: 14435
// Name: CoerceOptionsToObject
// Dependencies: [14435]
// Exports: CoerceOptionsToObject

// Module 14434 (CoerceOptionsToObject)
import _mod14435 from "module_14435" /* 14435 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14435.ToObject(arg0);
  }
};
