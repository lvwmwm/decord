// Module ID: 5493
// Function ID: 5494
// Name: flingGestureHandlerProps
// Dependencies: [5479, 5477]

// Module 5493 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5479 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
