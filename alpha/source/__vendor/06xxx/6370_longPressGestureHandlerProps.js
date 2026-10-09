// Module ID: 6370
// Function ID: 6371
// Name: longPressGestureHandlerProps
// Dependencies: [6360, 6358]

// Module 6370 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6360 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
