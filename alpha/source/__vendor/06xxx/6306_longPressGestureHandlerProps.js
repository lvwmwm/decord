// Module ID: 6306
// Function ID: 6307
// Name: longPressGestureHandlerProps
// Dependencies: [6296, 6294]

// Module 6306 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6296" /* 6296 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
