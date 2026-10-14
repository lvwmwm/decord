// Module ID: 6381
// Function ID: 6382
// Name: nativeViewGestureHandlerProps
// Dependencies: [6364, 6366]

// Module 6381 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6366 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
