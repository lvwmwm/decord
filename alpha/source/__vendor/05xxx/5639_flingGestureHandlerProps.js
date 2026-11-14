// Module ID: 5639
// Function ID: 5640
// Name: flingGestureHandlerProps
// Dependencies: [5625, 5623]

// Module 5639 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5625 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
