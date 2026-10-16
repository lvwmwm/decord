// Module ID: 15157
// Function ID: 15158
// Name: CoerceOptionsToObject
// Dependencies: [15158]
// Exports: CoerceOptionsToObject

// Module 15157 (CoerceOptionsToObject)
import _mod15158 from "module_15158" /* 15158 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15158.ToObject(arg0);
  }
};
