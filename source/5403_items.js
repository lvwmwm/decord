// Module ID: 5403
// Function ID: 5404
// Name: items
// Dependencies: [5385, 5387]

// Module 5403 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
