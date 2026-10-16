// Module ID: 6599
// Function ID: 6600
// Name: flingGestureHandlerProps
// Dependencies: [6586, 6584]

// Module 6599 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6586 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
