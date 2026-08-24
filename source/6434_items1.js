// Module ID: 6434
// Function ID: 6435
// Name: items1
// Dependencies: [6435, 6433]

// Module 6434 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6435 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
