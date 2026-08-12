// Module ID: 5508
// Function ID: 5509
// Name: items
// Dependencies: [5491, 5493]

// Module 5508 (items)
const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = require("_isNativeReflectConstruct")({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
