// Module ID: 5488
// Function ID: 5489
// Name: longPressGestureHandlerProps
// Dependencies: [5477, 5475]

// Module 5488 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5477 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
