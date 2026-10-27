// Module ID: 5335
// Function ID: 5336
// Name: longPressGestureHandlerProps
// Dependencies: [5325, 5323]

// Module 5335 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5325 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
