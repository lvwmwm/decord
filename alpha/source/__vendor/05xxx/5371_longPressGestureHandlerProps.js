// Module ID: 5371
// Function ID: 5372
// Name: longPressGestureHandlerProps
// Dependencies: [5361, 5359]

// Module 5371 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5361 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
