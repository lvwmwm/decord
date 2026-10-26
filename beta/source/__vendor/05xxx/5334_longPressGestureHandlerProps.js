// Module ID: 5334
// Function ID: 5335
// Name: longPressGestureHandlerProps
// Dependencies: [5324, 5322]

// Module 5334 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5324 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
