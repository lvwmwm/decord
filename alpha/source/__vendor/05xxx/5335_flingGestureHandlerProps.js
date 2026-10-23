// Module ID: 5335
// Function ID: 5336
// Name: flingGestureHandlerProps
// Dependencies: [5322, 5320]

// Module 5335 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 5322 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);
