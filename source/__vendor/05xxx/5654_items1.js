// Module ID: 5654
// Function ID: 5655
// Name: items1
// Dependencies: [5644, 5642]

// Module 5654 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5644 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
