// Module ID: 5702
// Function ID: 5703
// Name: items
// Dependencies: [5685, 5687]

// Module 5702 (items)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5687 */;

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({ name: "NativeViewGestureHandler", allowedProps: items1, config: {} });
