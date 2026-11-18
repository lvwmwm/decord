// Module ID: 5121
// Function ID: 5122
// Name: longPressGestureHandlerProps
// Dependencies: [5110, 5108]

// Module 5121 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5110 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
