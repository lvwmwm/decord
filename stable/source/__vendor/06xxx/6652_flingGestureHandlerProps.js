// Module ID: 6652
// Function ID: 6653
// Name: flingGestureHandlerProps
// Dependencies: [6639, 6637]

// Module 6652 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6639 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
