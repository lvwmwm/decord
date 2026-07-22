// Module ID: 5243
// Function ID: 45265
// Name: items
// Dependencies: []

// Module 5243 (items)
const items = [];
const obj = { name: "LongPressGestureHandler" };
const items1 = [];
const importDefaultResult = importDefault(dependencyMap[0]);
obj.allowedProps = items1.concat(importDefaultResult(arg1(dependencyMap[2]).baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = importDefault(dependencyMap[1])(obj);
