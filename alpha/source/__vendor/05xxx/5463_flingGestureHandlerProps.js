// Module ID: 5463
// Function ID: 5464
// Name: flingGestureHandlerProps
// Dependencies: [5449, 5447]

// Module 5463 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5449 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
