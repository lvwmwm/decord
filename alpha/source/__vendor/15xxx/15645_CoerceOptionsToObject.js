// Module ID: 15645
// Function ID: 15646
// Name: CoerceOptionsToObject
// Dependencies: [15646]
// Exports: CoerceOptionsToObject

// Module 15645 (CoerceOptionsToObject)
import ToString from "ToString" /* 15646 */;


export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToString.ToObject(arg0);
  }
}
