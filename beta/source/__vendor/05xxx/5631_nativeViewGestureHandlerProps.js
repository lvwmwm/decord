// Module ID: 5631
// Function ID: 5632
// Name: nativeViewGestureHandlerProps
// Dependencies: [5613, 5615]

// Module 5631 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5615 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
