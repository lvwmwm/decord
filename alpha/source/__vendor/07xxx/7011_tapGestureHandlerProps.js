// Module ID: 7011
// Function ID: 7012
// Name: tapGestureHandlerProps
// Dependencies: [7012, 7010]

// Module 7011 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_7012" /* 7012 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
