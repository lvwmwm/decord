// Module ID: 5636
// Function ID: 5637
// Name: longPressGestureHandlerProps
// Dependencies: [5625, 5623]

// Module 5636 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5625 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
