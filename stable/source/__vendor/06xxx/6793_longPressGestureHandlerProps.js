// Module ID: 6793
// Function ID: 6794
// Name: longPressGestureHandlerProps
// Dependencies: [6783, 6781]

// Module 6793 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6783" /* 6783 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
