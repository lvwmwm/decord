// Module ID: 5559
// Function ID: 5560
// Name: items1
// Dependencies: [5560, 5558]

// Module 5559 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5560 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
