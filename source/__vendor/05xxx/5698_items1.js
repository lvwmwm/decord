// Module ID: 5698
// Function ID: 5699
// Name: items1
// Dependencies: [5688, 5686]

// Module 5698 (items1)
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 5688 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: items1, config: { shouldCancelWhenOutside: true } };
items1 = [...items];

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstructDefault(obj);
