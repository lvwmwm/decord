// Module ID: 5461
// Function ID: 5462
// Name: flingGestureHandlerProps
// Dependencies: [5447, 5445]

// Module 5461 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5447 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
