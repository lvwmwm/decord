// Module ID: 5495
// Function ID: 5496
// Name: nativeViewGestureHandlerProps
// Dependencies: [5477, 5479]

// Module 5495 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5479 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
