// Module ID: 14486
// Function ID: 14487
// Name: CoerceOptionsToObject
// Dependencies: [14487]
// Exports: CoerceOptionsToObject

// Module 14486 (CoerceOptionsToObject)
import _mod14487 from "module_14487" /* 14487 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14487.ToObject(arg0);
  }
};
