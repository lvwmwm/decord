// Module ID: 6374
// Function ID: 6375
// Name: flingGestureHandlerProps
// Dependencies: [6361, 6359]

// Module 6374 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6361 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
