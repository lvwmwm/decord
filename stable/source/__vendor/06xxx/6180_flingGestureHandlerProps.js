// Module ID: 6180
// Function ID: 6181
// Name: flingGestureHandlerProps
// Dependencies: [6167, 6165]

// Module 6180 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6167 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
