// Module ID: 6917
// Function ID: 6918
// Name: tapGestureHandlerProps
// Dependencies: [6918, 6916]

// Module 6917 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6918" /* 6918 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
