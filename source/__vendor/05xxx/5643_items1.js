// Module ID: 5643
// Function ID: 5644
// Name: items1
// Dependencies: [5644, 5642]

// Module 5643 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5644 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
