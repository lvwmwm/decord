// Module ID: 5340
// Function ID: 5341
// Name: nativeViewGestureHandlerProps
// Dependencies: [5323, 5325]

// Module 5340 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5325 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
