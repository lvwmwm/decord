// Module ID: 5369
// Function ID: 5370
// Name: flingGestureHandlerProps
// Dependencies: [5356, 5354]

// Module 5369 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5356 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
