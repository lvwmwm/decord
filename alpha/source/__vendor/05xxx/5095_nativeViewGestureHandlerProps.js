// Module ID: 5095
// Function ID: 5096
// Name: nativeViewGestureHandlerProps
// Dependencies: [5077, 5079]

// Module 5095 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5079 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
