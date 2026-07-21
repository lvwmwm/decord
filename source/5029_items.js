// Module ID: 5029
// Function ID: 42899
// Name: items
// Dependencies: []

// Module 5029 (items)
const items = [true, true];
const items1 = [];
const combined = items1.concat(importDefault(dependencyMap[0])(arg1(dependencyMap[1]).baseGestureHandlerProps), items);

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = combined;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = importDefault(dependencyMap[2])({ name: "NativeViewGestureHandler", allowedProps: combined, config: {} });
