// Module ID: 5375
// Function ID: 5376
// Name: nativeViewGestureHandlerProps
// Dependencies: [5358, 5360]

// Module 5375 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5360 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
