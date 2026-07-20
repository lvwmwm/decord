// Module ID: 5010
// Function ID: 42779
// Name: items
// Dependencies: []

// Module 5010 (items)
const items = ["<string:830865412>", "<string:3881959428>", "<string:2064765033>", "<string:1647618504>", "<string:314519235>", -601361078172371500000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000020127998125512473];
const obj = { name: "TapGestureHandler" };
const items1 = [];
const importDefaultResult = importDefault(dependencyMap[0]);
obj.allowedProps = items1.concat(importDefaultResult(arg1(dependencyMap[2]).baseGestureHandlerProps), items);
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = importDefault(dependencyMap[1])(obj);
