// Module ID: 5220
// Function ID: 5221
// Name: nativeViewGestureHandlerProps
// Dependencies: [5202, 5204]

// Module 5220 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5204 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
