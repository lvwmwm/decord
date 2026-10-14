// Module ID: 6376
// Function ID: 6377
// Name: longPressGestureHandlerProps
// Dependencies: [6366, 6364]

// Module 6376 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6366 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
