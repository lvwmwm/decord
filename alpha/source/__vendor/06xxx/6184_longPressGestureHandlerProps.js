// Module ID: 6184
// Function ID: 6185
// Name: longPressGestureHandlerProps
// Dependencies: [6174, 6172]

// Module 6184 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6174 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
