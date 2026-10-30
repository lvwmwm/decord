// Module ID: 5338
// Function ID: 5339
// Name: flingGestureHandlerProps
// Dependencies: [5325, 5323]

// Module 5338 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5325 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
