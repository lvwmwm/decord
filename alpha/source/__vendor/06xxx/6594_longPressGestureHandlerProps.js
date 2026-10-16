// Module ID: 6594
// Function ID: 6595
// Name: longPressGestureHandlerProps
// Dependencies: [6584, 6582]

// Module 6594 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 6584 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
