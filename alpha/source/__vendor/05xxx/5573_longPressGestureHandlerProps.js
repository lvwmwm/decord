// Module ID: 5573
// Function ID: 5574
// Name: longPressGestureHandlerProps
// Dependencies: [5562, 5560]

// Module 5573 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5562 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
