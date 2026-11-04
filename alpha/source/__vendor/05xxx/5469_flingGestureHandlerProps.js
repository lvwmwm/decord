// Module ID: 5469
// Function ID: 5470
// Name: flingGestureHandlerProps
// Dependencies: [5455, 5453]

// Module 5469 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5455 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
