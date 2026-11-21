// Module ID: 5214
// Function ID: 5215
// Name: flingGestureHandlerProps
// Dependencies: [5200, 5198]

// Module 5214 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5200 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
