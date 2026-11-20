// Module ID: 5095
// Function ID: 5096
// Name: flingGestureHandlerProps
// Dependencies: [5081, 5079]

// Module 5095 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5081 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
