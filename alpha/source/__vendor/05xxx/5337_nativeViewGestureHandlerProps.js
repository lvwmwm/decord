// Module ID: 5337
// Function ID: 5338
// Name: nativeViewGestureHandlerProps
// Dependencies: [5320, 5322]

// Module 5337 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5322 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
