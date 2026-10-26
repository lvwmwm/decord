// Module ID: 15450
// Function ID: 15451
// Name: CoerceOptionsToObject
// Dependencies: [15451]
// Exports: CoerceOptionsToObject

// Module 15450 (CoerceOptionsToObject)
import _mod15451 from "module_15451" /* 15451 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15451.ToObject(arg0);
  }
};
