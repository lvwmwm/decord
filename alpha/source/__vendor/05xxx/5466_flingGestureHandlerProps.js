// Module ID: 5466
// Function ID: 5467
// Name: flingGestureHandlerProps
// Dependencies: [5453, 5451]

// Module 5466 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5453 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
