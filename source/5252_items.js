// Module ID: 5252
// Function ID: 45295
// Name: items
// Dependencies: [65, 5234, 5236]

// Module 5252 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [];
const combined = items1.concat(require("_toConsumableArray")(require("combined").baseGestureHandlerProps), items);

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = combined;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: combined, config: {} });
