// Module ID: 6103
// Function ID: 6104
// Name: longPressGestureHandlerProps
// Dependencies: [6093, 6091]

// Module 6103 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6093 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
