// Module ID: 5687
// Function ID: 5688
// Name: items1
// Dependencies: [5688, 5686]

// Module 5687 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5688 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
