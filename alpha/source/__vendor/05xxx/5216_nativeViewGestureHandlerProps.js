// Module ID: 5216
// Function ID: 5217
// Name: nativeViewGestureHandlerProps
// Dependencies: [5198, 5200]

// Module 5216 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5200 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
