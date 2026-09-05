// Module ID: 6692
// Function ID: 6693
// Name: items1
// Dependencies: [6682, 6680]

// Module 6692 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6682 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
