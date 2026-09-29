// Module ID: 6276
// Function ID: 6277
// Name: longPressGestureHandlerProps
// Dependencies: [6266, 6264]

// Module 6276 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6266" /* 6266 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
