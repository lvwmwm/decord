// Module ID: 5641
// Function ID: 5642
// Name: nativeViewGestureHandlerProps
// Dependencies: [5623, 5625]

// Module 5641 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5625 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
