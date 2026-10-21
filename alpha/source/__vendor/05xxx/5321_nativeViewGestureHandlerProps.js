// Module ID: 5321
// Function ID: 5322
// Name: nativeViewGestureHandlerProps
// Dependencies: [5304, 5306]

// Module 5321 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5306 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
