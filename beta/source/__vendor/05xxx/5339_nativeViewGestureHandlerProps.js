// Module ID: 5339
// Function ID: 5340
// Name: nativeViewGestureHandlerProps
// Dependencies: [5322, 5324]

// Module 5339 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5324 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
