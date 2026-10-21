// Module ID: 5316
// Function ID: 5317
// Name: longPressGestureHandlerProps
// Dependencies: [5306, 5304]

// Module 5316 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5306 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
