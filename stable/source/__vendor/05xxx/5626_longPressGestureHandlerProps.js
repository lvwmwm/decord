// Module ID: 5626
// Function ID: 5627
// Name: longPressGestureHandlerProps
// Dependencies: [5615, 5613]

// Module 5626 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5615 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
