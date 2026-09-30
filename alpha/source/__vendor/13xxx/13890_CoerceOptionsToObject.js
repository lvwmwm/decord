// Module ID: 13890
// Function ID: 13891
// Name: CoerceOptionsToObject
// Dependencies: [13891]
// Exports: CoerceOptionsToObject

// Module 13890 (CoerceOptionsToObject)
import _mod13891 from "module_13891" /* 13891 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13891.ToObject(arg0);
  }
};
