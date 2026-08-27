// Module ID: 5646
// Function ID: 5647
// Name: items
// Dependencies: [5629, 5631]

// Module 5646 (items)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5631 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
