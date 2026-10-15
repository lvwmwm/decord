// Module ID: 6592
// Function ID: 6593
// Name: longPressGestureHandlerProps
// Dependencies: [6582, 6580]

// Module 6592 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6582 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
