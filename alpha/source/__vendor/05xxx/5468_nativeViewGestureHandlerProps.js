// Module ID: 5468
// Function ID: 5469
// Name: nativeViewGestureHandlerProps
// Dependencies: [5451, 5453]

// Module 5468 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5453 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
