// Module ID: 5313
// Function ID: 5314
// Name: flingGestureHandlerProps
// Dependencies: [5299, 5297]

// Module 5313 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5299 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
