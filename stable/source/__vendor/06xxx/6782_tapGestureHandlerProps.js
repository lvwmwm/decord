// Module ID: 6782
// Function ID: 6783
// Name: tapGestureHandlerProps
// Dependencies: [6783, 6781]

// Module 6782 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6783" /* 6783 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
