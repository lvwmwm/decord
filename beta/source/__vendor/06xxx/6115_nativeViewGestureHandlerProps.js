// Module ID: 6115
// Function ID: 6116
// Name: nativeViewGestureHandlerProps
// Dependencies: [6098, 6100]

// Module 6115 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6100 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
