// Module ID: 5629
// Function ID: 5630
// Name: flingGestureHandlerProps
// Dependencies: [5615, 5613]

// Module 5629 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5615 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
