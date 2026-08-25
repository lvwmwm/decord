// Module ID: 5575
// Function ID: 5576
// Name: items
// Dependencies: [5558, 5560]

// Module 5575 (items)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5560 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
