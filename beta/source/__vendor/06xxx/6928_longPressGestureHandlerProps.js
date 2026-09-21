// Module ID: 6928
// Function ID: 6929
// Name: longPressGestureHandlerProps
// Dependencies: [6918, 6916]

// Module 6928 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6918" /* 6918 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
