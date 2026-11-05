// Module ID: 5473
// Function ID: 5474
// Name: nativeViewGestureHandlerProps
// Dependencies: [5455, 5457]

// Module 5473 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5457 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
