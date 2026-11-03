// Module ID: 5463
// Function ID: 5464
// Name: longPressGestureHandlerProps
// Dependencies: [5453, 5451]

// Module 5463 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5453 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
