// Module ID: 6189
// Function ID: 6190
// Name: nativeViewGestureHandlerProps
// Dependencies: [6172, 6174]

// Module 6189 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6174 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
