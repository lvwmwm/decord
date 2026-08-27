// Module ID: 5641
// Function ID: 5642
// Name: items1
// Dependencies: [5631, 5629]

// Module 5641 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5631 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
