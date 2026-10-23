// Module ID: 5332
// Function ID: 5333
// Name: longPressGestureHandlerProps
// Dependencies: [5322, 5320]

// Module 5332 (longPressGestureHandlerProps)
import createHandler from "createHandler" /* 5322 */;

let items1;
const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = createHandler(obj);
