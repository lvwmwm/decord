// Module ID: 6632
// Function ID: 6633
// Name: items1
// Dependencies: [6622, 6620]

// Module 6632 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6622 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
