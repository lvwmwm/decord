// Module ID: 5215
// Function ID: 5216
// Name: longPressGestureHandlerProps
// Dependencies: [5204, 5202]

// Module 5215 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5204 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
