// Module ID: 7020
// Function ID: 7021
// Name: longPressGestureHandlerProps
// Dependencies: [7010, 7008]

// Module 7020 (longPressGestureHandlerProps)
import _isNativeReflectConstruct from "module_7010" /* 7010 */;

const items = ["minDurationMs", "maxDist", "numberOfPointers"];
const obj = { name: "LongPressGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = _isNativeReflectConstruct(obj);
