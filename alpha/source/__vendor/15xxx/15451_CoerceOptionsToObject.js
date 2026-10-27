// Module ID: 15451
// Function ID: 15452
// Name: CoerceOptionsToObject
// Dependencies: [15452]
// Exports: CoerceOptionsToObject

// Module 15451 (CoerceOptionsToObject)
import _mod15452 from "module_15452" /* 15452 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15452.ToObject(arg0);
  }
};
