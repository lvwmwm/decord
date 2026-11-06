// Module ID: 5491
// Function ID: 5492
// Name: flingGestureHandlerProps
// Dependencies: [5477, 5475]

// Module 5491 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5477 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
