// Module ID: 6379
// Function ID: 6380
// Name: flingGestureHandlerProps
// Dependencies: [6366, 6364]

// Module 6379 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6366 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
