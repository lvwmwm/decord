// Module ID: 5126
// Function ID: 5127
// Name: nativeViewGestureHandlerProps
// Dependencies: [5108, 5110]

// Module 5126 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5110 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
