// Module ID: 5295
// Function ID: 5296
// Name: longPressGestureHandlerProps
// Dependencies: [5285, 5283]

// Module 5295 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5285 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
