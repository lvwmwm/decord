// Module ID: 14816
// Function ID: 14817
// Name: CoerceOptionsToObject
// Dependencies: [14817]
// Exports: CoerceOptionsToObject

// Module 14816 (CoerceOptionsToObject)
import _mod14817 from "module_14817" /* 14817 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14817.ToObject(arg0);
  }
};
