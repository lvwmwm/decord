// Module ID: 14778
// Function ID: 14779
// Name: CoerceOptionsToObject
// Dependencies: [14779]
// Exports: CoerceOptionsToObject

// Module 14778 (CoerceOptionsToObject)
import _mod14779 from "module_14779" /* 14779 */;


export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14779.ToObject(arg0);
  }
};
