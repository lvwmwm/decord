// Module ID: 6110
// Function ID: 6111
// Name: longPressGestureHandlerProps
// Dependencies: [6100, 6098]

// Module 6110 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6100" /* 6100 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
