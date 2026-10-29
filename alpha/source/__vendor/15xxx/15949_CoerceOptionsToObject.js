// Module ID: 15949
// Function ID: 15950
// Name: CoerceOptionsToObject
// Dependencies: [15950]
// Exports: CoerceOptionsToObject

// Module 15949 (CoerceOptionsToObject)
import _mod15950 from "module_15950" /* 15950 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15950.ToObject(arg0);
  }
}
