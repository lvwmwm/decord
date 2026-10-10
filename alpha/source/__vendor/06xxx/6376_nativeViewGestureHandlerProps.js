// Module ID: 6376
// Function ID: 6377
// Name: nativeViewGestureHandlerProps
// Dependencies: [6359, 6361]

// Module 6376 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6361 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
