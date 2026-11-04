// Module ID: 5343
// Function ID: 5344
// Name: flingGestureHandlerProps
// Dependencies: [5330, 5328]

// Module 5343 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5330 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
