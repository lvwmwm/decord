// Module ID: 5097
// Function ID: 5098
// Name: nativeViewGestureHandlerProps
// Dependencies: [5079, 5081]

// Module 5097 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5081 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
