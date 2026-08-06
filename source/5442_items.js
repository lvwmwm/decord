// Module ID: 5442
// Function ID: 5443
// Name: items
// Dependencies: [5424, 5426]

// Module 5442 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
