// Module ID: 5250
// Function ID: 45294
// Name: items
// Dependencies: [65, 5236, 5234]

// Module 5250 (items)
import importDefaultResult from "_toConsumableArray";

const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler" };
const items1 = [];
obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
obj.config = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);
