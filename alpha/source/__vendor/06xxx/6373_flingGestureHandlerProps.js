// Module ID: 6373
// Function ID: 6374
// Name: flingGestureHandlerProps
// Dependencies: [6360, 6358]

// Module 6373 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6360 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
