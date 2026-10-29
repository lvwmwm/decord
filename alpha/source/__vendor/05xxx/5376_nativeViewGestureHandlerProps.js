// Module ID: 5376
// Function ID: 5377
// Name: nativeViewGestureHandlerProps
// Dependencies: [5359, 5361]

// Module 5376 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5361 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
