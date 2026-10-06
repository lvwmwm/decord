// Module ID: 13696
// Function ID: 13697
// Name: CoerceOptionsToObject
// Dependencies: [13697]
// Exports: CoerceOptionsToObject

// Module 13696 (CoerceOptionsToObject)
import _mod13697 from "module_13697" /* 13697 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13697.ToObject(arg0);
  }
};
