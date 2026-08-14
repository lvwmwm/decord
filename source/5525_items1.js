// Module ID: 5525
// Function ID: 5526
// Name: items1
// Dependencies: [5515, 5513]

// Module 5525 (items1)
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = require("_isNativeReflectConstruct")(obj);
