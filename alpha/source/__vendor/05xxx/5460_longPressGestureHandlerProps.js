// Module ID: 5460
// Function ID: 5461
// Name: longPressGestureHandlerProps
// Dependencies: [5449, 5447]

// Module 5460 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5449 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
