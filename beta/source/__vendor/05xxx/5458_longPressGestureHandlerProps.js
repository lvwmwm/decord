// Module ID: 5458
// Function ID: 5459
// Name: longPressGestureHandlerProps
// Dependencies: [5447, 5445]

// Module 5458 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5447 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
