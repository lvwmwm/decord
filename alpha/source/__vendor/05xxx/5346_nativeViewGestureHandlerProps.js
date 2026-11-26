// Module ID: 5346
// Function ID: 5347
// Name: nativeViewGestureHandlerProps
// Dependencies: [5328, 5330]

// Module 5346 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5330 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
