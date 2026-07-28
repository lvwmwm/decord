// Module ID: 5286
// Function ID: 45421
// Name: items
// Dependencies: [65, 5268, 5270]

// Module 5286 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [];
const combined = items1.concat(require("_toConsumableArray")(require("combined").baseGestureHandlerProps), items);

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = combined;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: combined, config: {} });
