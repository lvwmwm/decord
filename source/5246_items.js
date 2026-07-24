// Module ID: 5246
// Function ID: 45289
// Name: items
// Dependencies: [65, 5236, 5234]

// Module 5246 (items)
import importDefaultResult from "_toConsumableArray";

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = require("_isNativeReflectConstruct")(obj);
