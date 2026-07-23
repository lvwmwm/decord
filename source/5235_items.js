// Module ID: 5235
// Function ID: 45216
// Name: items
// Dependencies: [65, 5236, 5234]

// Module 5235 (items)
import importDefaultResult from "_toConsumableArray";

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = require("_isNativeReflectConstruct")(obj);
