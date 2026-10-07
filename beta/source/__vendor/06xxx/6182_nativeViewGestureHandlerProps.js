// Module ID: 6182
// Function ID: 6183
// Name: nativeViewGestureHandlerProps
// Dependencies: [6165, 6167]

// Module 6182 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6167 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
