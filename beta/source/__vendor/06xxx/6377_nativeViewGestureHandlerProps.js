// Module ID: 6377
// Function ID: 6378
// Name: nativeViewGestureHandlerProps
// Dependencies: [6360, 6362]

// Module 6377 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6362 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
