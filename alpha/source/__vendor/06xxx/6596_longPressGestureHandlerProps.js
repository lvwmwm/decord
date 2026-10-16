// Module ID: 6596
// Function ID: 6597
// Name: longPressGestureHandlerProps
// Dependencies: [6586, 6584]

// Module 6596 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6586 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
