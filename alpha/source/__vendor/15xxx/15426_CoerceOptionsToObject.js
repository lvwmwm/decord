// Module ID: 15426
// Function ID: 15427
// Name: CoerceOptionsToObject
// Dependencies: [15427]
// Exports: CoerceOptionsToObject

// Module 15426 (CoerceOptionsToObject)
import _mod15427 from "module_15427" /* 15427 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15427.ToObject(arg0);
  }
};
