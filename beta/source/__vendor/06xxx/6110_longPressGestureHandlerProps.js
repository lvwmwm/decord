// Module ID: 6110
// Function ID: 6111
// Name: longPressGestureHandlerProps
// Dependencies: [6100, 6098]

// Module 6110 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6100 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
