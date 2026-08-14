// Module ID: 5528
// Function ID: 5529
// Name: items1
// Dependencies: [5515, 5513]

// Module 5528 (items1)
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);
