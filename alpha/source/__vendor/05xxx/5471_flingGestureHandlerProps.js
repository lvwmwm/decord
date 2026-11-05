// Module ID: 5471
// Function ID: 5472
// Name: flingGestureHandlerProps
// Dependencies: [5457, 5455]

// Module 5471 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5457 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
