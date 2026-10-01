// Module ID: 6113
// Function ID: 6114
// Name: flingGestureHandlerProps
// Dependencies: [6100, 6098]

// Module 6113 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6100 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
