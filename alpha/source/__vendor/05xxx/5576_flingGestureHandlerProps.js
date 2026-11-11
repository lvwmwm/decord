// Module ID: 5576
// Function ID: 5577
// Name: flingGestureHandlerProps
// Dependencies: [5562, 5560]

// Module 5576 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5562 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
