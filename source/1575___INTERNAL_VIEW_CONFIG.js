// Module ID: 1575
// Function ID: 17647
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117]

// Module 1575 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } } };
obj.validAttributes = Object.assign({ enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true }, weakSet.ConditionallyIgnoredEventHandlers({ onKeyboardMoveStart: true, onKeyboardMove: true, onKeyboardMoveEnd: true, onKeyboardMoveInteractive: true, onFocusedInputLayoutChanged: true, onFocusedInputTextChanged: true, onFocusedInputSelectionChanged: true }));
obj = {
  synchronizeFocusedInputLayout(current) {
    require(117) /* renderElement */.dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};

export default get.get("KeyboardControllerView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
