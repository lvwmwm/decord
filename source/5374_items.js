// Module ID: 5374
// Function ID: 5375
// Name: items
// Dependencies: [5356, 5358]

// Module 5374 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
