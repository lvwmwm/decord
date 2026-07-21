// Module ID: 1575
// Function ID: 17645
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 1575 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } } };
const _module = require(dependencyMap[0]);
obj.validAttributes = Object.assign({}, _module.ConditionallyIgnoredEventHandlers({ customBanner: "force", grdwwt: "forceChange", LevelCardPosition: "rotation", nested: "rotationChange", buttonBlur: "scale", clearFolder: "scaleChange", ctaProps: "duration" }));
const _module1 = require(dependencyMap[1]);
obj = {
  synchronizeFocusedInputLayout(current) {
    require(dependencyMap[2]).dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};

export default _module1.get("KeyboardControllerView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
