// Module ID: 5463
// Function ID: 5464
// Name: nativeViewGestureHandlerProps
// Dependencies: [5445, 5447]

// Module 5463 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5447 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
