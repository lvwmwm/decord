// Module ID: 14524
// Function ID: 14525
// Name: CoerceOptionsToObject
// Dependencies: [14525]
// Exports: CoerceOptionsToObject

// Module 14524 (CoerceOptionsToObject)
import _mod14525 from "module_14525" /* 14525 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14525.ToObject(arg0);
  }
};
