// Module ID: 6375
// Function ID: 6376
// Name: flingGestureHandlerProps
// Dependencies: [6362, 6360]

// Module 6375 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6362 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
