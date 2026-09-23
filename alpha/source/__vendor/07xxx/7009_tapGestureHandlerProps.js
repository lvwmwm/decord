// Module ID: 7009
// Function ID: 7010
// Name: tapGestureHandlerProps
// Dependencies: [7010, 7008]

// Module 7009 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_7010" /* 7010 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
