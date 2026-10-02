// Module ID: 6108
// Function ID: 6109
// Name: nativeViewGestureHandlerProps
// Dependencies: [6091, 6093]

// Module 6108 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6093 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
