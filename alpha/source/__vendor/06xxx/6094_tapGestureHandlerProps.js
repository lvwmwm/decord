// Module ID: 6094
// Function ID: 6095
// Name: tapGestureHandlerProps
// Dependencies: [6095, 6093]

// Module 6094 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6095" /* 6095 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
