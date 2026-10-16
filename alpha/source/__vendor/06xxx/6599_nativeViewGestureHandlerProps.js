// Module ID: 6599
// Function ID: 6600
// Name: nativeViewGestureHandlerProps
// Dependencies: [6582, 6584]

// Module 6599 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6584 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
