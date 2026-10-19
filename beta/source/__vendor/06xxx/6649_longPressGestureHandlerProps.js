// Module ID: 6649
// Function ID: 6650
// Name: longPressGestureHandlerProps
// Dependencies: [6639, 6637]

// Module 6649 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6639 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
