// Module ID: 6366
// Function ID: 6367
// Name: flingGestureHandlerProps
// Dependencies: [6353, 6351]

// Module 6366 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6353 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
