// Module ID: 5298
// Function ID: 5299
// Name: flingGestureHandlerProps
// Dependencies: [5285, 5283]

// Module 5298 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5285 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
