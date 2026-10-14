// Module ID: 6177
// Function ID: 6178
// Name: longPressGestureHandlerProps
// Dependencies: [6167, 6165]

// Module 6177 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6167 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
