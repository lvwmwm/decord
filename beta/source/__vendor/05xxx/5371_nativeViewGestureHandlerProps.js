// Module ID: 5371
// Function ID: 5372
// Name: nativeViewGestureHandlerProps
// Dependencies: [5354, 5356]

// Module 5371 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5356 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
