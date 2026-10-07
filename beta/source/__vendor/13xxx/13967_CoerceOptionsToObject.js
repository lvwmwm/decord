// Module ID: 13967
// Function ID: 13968
// Name: CoerceOptionsToObject
// Dependencies: [13968]
// Exports: CoerceOptionsToObject

// Module 13967 (CoerceOptionsToObject)
import _mod13968 from "module_13968" /* 13968 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13968.ToObject(arg0);
  }
};
