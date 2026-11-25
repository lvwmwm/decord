// Module ID: 5315
// Function ID: 5316
// Name: nativeViewGestureHandlerProps
// Dependencies: [5297, 5299]

// Module 5315 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5299 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
