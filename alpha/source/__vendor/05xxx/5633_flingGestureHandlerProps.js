// Module ID: 5633
// Function ID: 5634
// Name: flingGestureHandlerProps
// Dependencies: [5619, 5617]

// Module 5633 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5619 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
