// Module ID: 5468
// Function ID: 5469
// Name: longPressGestureHandlerProps
// Dependencies: [5457, 5455]

// Module 5468 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5457 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
