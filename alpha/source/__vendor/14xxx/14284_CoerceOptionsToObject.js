// Module ID: 14284
// Function ID: 14285
// Name: CoerceOptionsToObject
// Dependencies: [14285]
// Exports: CoerceOptionsToObject

// Module 14284 (CoerceOptionsToObject)
import _mod14285 from "module_14285" /* 14285 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14285.ToObject(arg0);
  }
};
