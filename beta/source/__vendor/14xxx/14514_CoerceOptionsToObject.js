// Module ID: 14514
// Function ID: 14515
// Name: CoerceOptionsToObject
// Dependencies: [14515]
// Exports: CoerceOptionsToObject

// Module 14514 (CoerceOptionsToObject)
import _mod14515 from "module_14515" /* 14515 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14515.ToObject(arg0);
  }
};
