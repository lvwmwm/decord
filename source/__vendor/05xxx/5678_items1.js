// Module ID: 5678
// Function ID: 5679
// Name: items1
// Dependencies: [5679, 5677]

// Module 5678 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5679 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstructDefault(obj);
