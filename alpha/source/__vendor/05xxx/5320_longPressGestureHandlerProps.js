// Module ID: 5320
// Function ID: 5321
// Name: longPressGestureHandlerProps
// Dependencies: [5310, 5308]

// Module 5320 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5310 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
