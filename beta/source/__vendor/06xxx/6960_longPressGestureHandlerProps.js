// Module ID: 6960
// Function ID: 6961
// Name: longPressGestureHandlerProps
// Dependencies: [6950, 6948]

// Module 6960 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6950" /* 6950 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
