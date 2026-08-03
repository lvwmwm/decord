// Module ID: 5372
// Function ID: 5373
// Name: items1
// Dependencies: [5358, 5356]

// Module 5372 (items1)
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);
