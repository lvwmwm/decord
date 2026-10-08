// Module ID: 6363
// Function ID: 6364
// Name: longPressGestureHandlerProps
// Dependencies: [6353, 6351]

// Module 6363 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6353 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
