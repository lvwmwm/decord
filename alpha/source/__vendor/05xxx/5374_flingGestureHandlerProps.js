// Module ID: 5374
// Function ID: 5375
// Name: flingGestureHandlerProps
// Dependencies: [5361, 5359]

// Module 5374 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5361 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
