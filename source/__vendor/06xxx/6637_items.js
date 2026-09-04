// Module ID: 6637
// Function ID: 6638
// Name: items
// Dependencies: [6620, 6622]

// Module 6637 (items)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6622 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
