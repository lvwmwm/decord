// Module ID: 5464
// Function ID: 5465
// Name: items1
// Dependencies: [5454, 5452]

// Module 5464 (items1)
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = require("_isNativeReflectConstruct")(obj);
