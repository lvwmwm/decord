// Module ID: 5337
// Function ID: 5338
// Name: flingGestureHandlerProps
// Dependencies: [5324, 5322]

// Module 5337 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5324 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
