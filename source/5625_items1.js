// Module ID: 5625
// Function ID: 5626
// Name: items1
// Dependencies: [5626, 5624]

// Module 5625 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5626 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
