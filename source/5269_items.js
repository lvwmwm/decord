// Module ID: 5269
// Function ID: 45342
// Name: items
// Dependencies: [65, 5270, 5268]

// Module 5269 (items)
import importDefaultResult from "_toConsumableArray";

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = require("_isNativeReflectConstruct")(obj);
