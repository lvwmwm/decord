// Module ID: 6597
// Function ID: 6598
// Name: flingGestureHandlerProps
// Dependencies: [6584, 6582]

// Module 6597 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6584 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
