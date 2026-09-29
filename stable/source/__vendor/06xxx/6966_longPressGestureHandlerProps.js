// Module ID: 6966
// Function ID: 6967
// Name: longPressGestureHandlerProps
// Dependencies: [6956, 6954]

// Module 6966 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_6956" /* 6956 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
