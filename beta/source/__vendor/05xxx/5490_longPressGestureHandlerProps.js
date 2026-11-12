// Module ID: 5490
// Function ID: 5491
// Name: longPressGestureHandlerProps
// Dependencies: [5479, 5477]

// Module 5490 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5479 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
