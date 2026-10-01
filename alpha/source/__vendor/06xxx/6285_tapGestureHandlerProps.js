// Module ID: 6285
// Function ID: 6286
// Name: tapGestureHandlerProps
// Dependencies: [6286, 6284]

// Module 6285 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6286" /* 6286 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
