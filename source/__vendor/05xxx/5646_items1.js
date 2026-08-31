// Module ID: 5646
// Function ID: 5647
// Name: items1
// Dependencies: [5647, 5645]

// Module 5646 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5647 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
