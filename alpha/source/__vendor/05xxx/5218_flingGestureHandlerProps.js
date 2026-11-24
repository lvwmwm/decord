// Module ID: 5218
// Function ID: 5219
// Name: flingGestureHandlerProps
// Dependencies: [5204, 5202]

// Module 5218 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5204 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
