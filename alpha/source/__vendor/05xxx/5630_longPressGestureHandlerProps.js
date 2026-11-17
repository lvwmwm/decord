// Module ID: 5630
// Function ID: 5631
// Name: longPressGestureHandlerProps
// Dependencies: [5619, 5617]

// Module 5630 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5619 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
