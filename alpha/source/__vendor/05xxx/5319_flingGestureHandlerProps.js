// Module ID: 5319
// Function ID: 5320
// Name: flingGestureHandlerProps
// Dependencies: [5306, 5304]

// Module 5319 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5306 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
