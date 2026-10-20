// Module ID: 5300
// Function ID: 5301
// Name: nativeViewGestureHandlerProps
// Dependencies: [5283, 5285]

// Module 5300 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5285 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
