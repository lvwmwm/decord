// Module ID: 6621
// Function ID: 6622
// Name: items1
// Dependencies: [6622, 6620]

// Module 6621 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6622 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
