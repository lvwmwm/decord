// Module ID: 5234
// Function ID: 45220
// Name: combined
// Dependencies: []

// Module 5234 (combined)
const items = ["id", "enabled", "shouldCancelWhenOutside", "hitSlop", "cancelsTouchesInView", "userSelect", "activeCursor", "mouseButton", "enableContextMenu", "touchAction"];
const items1 = [];
const items2 = [];
const combined = items1.concat(items, ["waitFor", "simultaneousHandlers", "blocksHandlers"], ["onBegan", "onFailed", "onCancelled", "onActivated", "onEnded", "onGestureEvent", "onHandlerStateChange"]);
arg5.baseGestureHandlerProps = combined;
arg5.baseGestureHandlerWithDetectorProps = items2.concat(items, ["needsPointerData", "manualActivation"]);
arg5.MouseButton = { LEFT: 1, [1]: "LEFT", RIGHT: 2, [2]: "RIGHT", MIDDLE: 4, [4]: "MIDDLE", BUTTON_4: 8, [8]: "BUTTON_4", BUTTON_5: 16, [16]: "BUTTON_5", ALL: 31, [31]: "ALL" };
