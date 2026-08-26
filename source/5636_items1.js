// Module ID: 5636
// Function ID: 5637
// Name: items1
// Dependencies: [5626, 5624]

// Module 5636 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5626 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
