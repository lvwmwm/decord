// Module ID: 5465
// Function ID: 5466
// Name: nativeViewGestureHandlerProps
// Dependencies: [5447, 5449]

// Module 5465 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5449 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
