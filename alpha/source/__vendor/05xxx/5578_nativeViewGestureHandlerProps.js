// Module ID: 5578
// Function ID: 5579
// Name: nativeViewGestureHandlerProps
// Dependencies: [5560, 5562]

// Module 5578 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5562 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
