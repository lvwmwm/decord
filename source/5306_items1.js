// Module ID: 5306
// Function ID: 5307
// Name: items1
// Dependencies: [5296, 5294]

// Module 5306 (items1)
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = require("_isNativeReflectConstruct")(obj);
