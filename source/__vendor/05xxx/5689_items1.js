// Module ID: 5689
// Function ID: 5690
// Name: items1
// Dependencies: [5679, 5677]

// Module 5689 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5679 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
