// Module ID: 15713
// Function ID: 15714
// Name: CoerceOptionsToObject
// Dependencies: [15714]
// Exports: CoerceOptionsToObject

// Module 15713 (CoerceOptionsToObject)
import _mod15714 from "module_15714" /* 15714 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15714.ToObject(arg0);
  }
};
