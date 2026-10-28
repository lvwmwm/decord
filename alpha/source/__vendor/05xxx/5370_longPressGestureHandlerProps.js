// Module ID: 5370
// Function ID: 5371
// Name: longPressGestureHandlerProps
// Dependencies: [5360, 5358]

// Module 5370 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5360 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
