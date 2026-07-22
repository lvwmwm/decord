// Module ID: 5232
// Function ID: 45197
// Name: items
// Dependencies: []

// Module 5232 (items)
const items = [false, false, false, false, false, false, false];
const obj = { name: "TapGestureHandler" };
const items1 = [];
const importDefaultResult = importDefault(dependencyMap[0]);
obj.allowedProps = items1.concat(importDefaultResult(arg1(dependencyMap[2]).baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = importDefault(dependencyMap[1])(obj);
