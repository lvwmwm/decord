// Module ID: 5697
// Function ID: 5698
// Name: items1
// Dependencies: [5687, 5685]

// Module 5697 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5687 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
