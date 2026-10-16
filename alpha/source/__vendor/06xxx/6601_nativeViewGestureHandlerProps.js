// Module ID: 6601
// Function ID: 6602
// Name: nativeViewGestureHandlerProps
// Dependencies: [6584, 6586]

// Module 6601 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 6586 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
