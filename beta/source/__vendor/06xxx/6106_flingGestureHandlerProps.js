// Module ID: 6106
// Function ID: 6107
// Name: flingGestureHandlerProps
// Dependencies: [6093, 6091]

// Module 6106 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6093 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
