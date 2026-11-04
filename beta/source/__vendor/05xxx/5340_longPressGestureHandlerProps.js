// Module ID: 5340
// Function ID: 5341
// Name: longPressGestureHandlerProps
// Dependencies: [5330, 5328]

// Module 5340 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5330 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
