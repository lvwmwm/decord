// Module ID: 5124
// Function ID: 5125
// Name: flingGestureHandlerProps
// Dependencies: [5110, 5108]

// Module 5124 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5110 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
