// Module ID: 15487
// Function ID: 15488
// Name: CoerceOptionsToObject
// Dependencies: [15488]
// Exports: CoerceOptionsToObject

// Module 15487 (CoerceOptionsToObject)
import _mod15488 from "module_15488" /* 15488 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15488.ToObject(arg0);
  }
};
