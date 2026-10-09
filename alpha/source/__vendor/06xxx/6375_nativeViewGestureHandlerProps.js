// Module ID: 6375
// Function ID: 6376
// Name: nativeViewGestureHandlerProps
// Dependencies: [6358, 6360]

// Module 6375 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6360 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
