// Module ID: 6597
// Function ID: 6598
// Name: nativeViewGestureHandlerProps
// Dependencies: [6580, 6582]

// Module 6597 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6582 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
