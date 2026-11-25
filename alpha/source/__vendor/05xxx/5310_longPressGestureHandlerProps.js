// Module ID: 5310
// Function ID: 5311
// Name: longPressGestureHandlerProps
// Dependencies: [5299, 5297]

// Module 5310 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5299 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
