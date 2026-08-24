// Module ID: 6445
// Function ID: 6446
// Name: items1
// Dependencies: [6435, 6433]

// Module 6445 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6435 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
