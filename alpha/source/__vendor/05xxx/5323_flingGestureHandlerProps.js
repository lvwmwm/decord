// Module ID: 5323
// Function ID: 5324
// Name: flingGestureHandlerProps
// Dependencies: [5310, 5308]

// Module 5323 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5310 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
