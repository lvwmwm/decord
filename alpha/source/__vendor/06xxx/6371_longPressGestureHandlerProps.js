// Module ID: 6371
// Function ID: 6372
// Name: longPressGestureHandlerProps
// Dependencies: [6361, 6359]

// Module 6371 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6361 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
