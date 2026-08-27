// Module ID: 5630
// Function ID: 5631
// Name: items1
// Dependencies: [5631, 5629]

// Module 5630 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5631 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
