// Module ID: 7121
// Function ID: 7122
// Name: pinchHandlerName
// Dependencies: [7010, 7008]

// Module 7121 (pinchHandlerName)
import _isNativeReflectConstruct from "module_7010" /* 7010 */;

const obj = { name: "PinchGestureHandler", allowedProps: null, config: null };
obj.allowedProps = fn(7008).baseGestureHandlerProps;
obj.config = {};

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = _isNativeReflectConstruct(obj);
