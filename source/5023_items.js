// Module ID: 5023
// Function ID: 42888
// Name: items
// Dependencies: []

// Module 5023 (items)
const items = [true, true, true];
const obj = { name: "LongPressGestureHandler" };
const items1 = [];
const importDefaultResult = importDefault(dependencyMap[0]);
obj.allowedProps = items1.concat(importDefaultResult(arg1(dependencyMap[2]).baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const longPressGestureHandlerProps = items;
export const longPressHandlerName = "LongPressGestureHandler";
export const LongPressGestureHandler = importDefault(dependencyMap[1])(obj);
