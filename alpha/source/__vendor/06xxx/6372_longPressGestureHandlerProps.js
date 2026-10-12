// Module ID: 6372
// Function ID: 6373
// Name: longPressGestureHandlerProps
// Dependencies: [6362, 6360]

// Module 6372 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6362 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
