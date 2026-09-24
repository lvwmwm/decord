// Module ID: 6949
// Function ID: 6950
// Name: tapGestureHandlerProps
// Dependencies: [6950, 6948]

// Module 6949 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6950" /* 6950 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
