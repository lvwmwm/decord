// Module ID: 5635
// Function ID: 5636
// Name: nativeViewGestureHandlerProps
// Dependencies: [5617, 5619]

// Module 5635 (nativeViewGestureHandlerProps)
import createHandlerDefault from "createHandler" /* 5619 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
