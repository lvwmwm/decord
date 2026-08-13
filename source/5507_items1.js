// Module ID: 5507
// Function ID: 5508
// Name: items1
// Dependencies: [5494, 5492]

// Module 5507 (items1)
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);
