// Module ID: 5284
// Function ID: 45415
// Name: items
// Dependencies: [65, 5270, 5268]

// Module 5284 (items)
import importDefaultResult from "_toConsumableArray";

const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);
