// Module ID: 5211
// Function ID: 5212
// Name: longPressGestureHandlerProps
// Dependencies: [5200, 5198]

// Module 5211 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5200 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
