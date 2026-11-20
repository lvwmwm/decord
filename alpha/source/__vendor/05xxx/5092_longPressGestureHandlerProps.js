// Module ID: 5092
// Function ID: 5093
// Name: longPressGestureHandlerProps
// Dependencies: [5081, 5079]

// Module 5092 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5081 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
