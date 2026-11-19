// Module ID: 5093
// Function ID: 5094
// Name: flingGestureHandlerProps
// Dependencies: [5079, 5077]

// Module 5093 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5079 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
