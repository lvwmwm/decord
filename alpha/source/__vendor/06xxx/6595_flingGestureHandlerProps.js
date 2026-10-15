// Module ID: 6595
// Function ID: 6596
// Name: flingGestureHandlerProps
// Dependencies: [6582, 6580]

// Module 6595 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6582 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
