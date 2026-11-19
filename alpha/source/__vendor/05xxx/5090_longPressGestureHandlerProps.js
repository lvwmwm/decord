// Module ID: 5090
// Function ID: 5091
// Name: longPressGestureHandlerProps
// Dependencies: [5079, 5077]

// Module 5090 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5079 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
