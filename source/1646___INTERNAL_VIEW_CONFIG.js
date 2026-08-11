// Module ID: 1646
// Function ID: 1647
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 114]

// Module 1646 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } }, validAttributes: null };
obj = { enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyboardMoveStart: true, onKeyboardMove: true, onKeyboardMoveEnd: true, onKeyboardMoveInteractive: true, onFocusedInputLayoutChanged: true, onFocusedInputTextChanged: true, onFocusedInputSelectionChanged: true }));
obj[2] = obj;
obj = {
  synchronizeFocusedInputLayout(current) {
    require(114) /* renderElement */.dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};

export default setRuntimeConfigProvider.get("KeyboardControllerView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
