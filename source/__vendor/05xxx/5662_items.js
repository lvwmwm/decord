// Module ID: 5662
// Function ID: 5663
// Name: items
// Dependencies: [5645, 5647]

// Module 5662 (items)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5647 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
