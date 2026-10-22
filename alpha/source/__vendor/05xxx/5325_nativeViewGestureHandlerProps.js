// Module ID: 5325
// Function ID: 5326
// Name: nativeViewGestureHandlerProps
// Dependencies: [5308, 5310]

// Module 5325 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5310 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
