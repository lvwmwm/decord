// Module ID: 5056
// Function ID: 5057
// Name: ActionSheetActionCreators
// Dependencies: [109, 19, 4802, 21, 5057, 5058, 1894, 584, 2]
// Exports: showActionSheet

// Module 5056 (ActionSheetActionCreators)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4802 */;
import size from "module_2" /* 2 */;

let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
const jsx = Fragment.jsx;
let obj = {
  openLazy(promise, arg1, arg2, arg3) {
    let nextPromise;
    let closure_0 = arg1;
    let closure_1 = arg2;
    let closure_2 = arg3;
    if (promise instanceof Promise) {
      nextPromise = promise.then((result) => result.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((result) => {
      let appEntryKey;
      let backdropKind;
      let disableHapticOnOpen;
      let impressionName;
      let impressionProperties;
      let obj = closure_1;
      if (closure_1 == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      const merged = Object.assign(_objectWithoutProperties(obj, closure_3));
      const tmp2 = jsx(result, {});
      const tmp3 = closure_0;
      const tmp4 = closure_2;
      if (!disableHapticOnOpen) {
        const obj3 = HapticUtils;
        result = obj3.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
      const obj4 = KeyboardManagerUtils;
      const result1 = obj4.dismissGlobalKeyboard();
      const obj5 = DispatcherDefault;
      obj5.dispatch({ type: "SHOW_ACTION_SHEET", content: tmp2, key: tmp3, impressionName, impressionProperties, backdropKind, stackingBehavior: tmp4, appEntryKey });
    });
  },
  hideActionSheet(key) {
    if (ActionSheetStore.isOpen()) {
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    }
    const obj2 = DispatcherDefault;
    const obj3 = { type: "HIDE_ACTION_SHEET", key };
    obj2.dispatch(obj3);
  },
  hideAllActionSheets() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj2);
  },
  resetActionSheetsForAppEntryKey(appEntryKey) {
    const obj = DispatcherDefault;
    const obj2 = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default obj;
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(disableHapticOnOpen) {
  let appEntryKey;
  let backdropKind;
  let content;
  let impressionName;
  let impressionProperties;
  let key;
  let stackingBehavior;
  ({ content, key, impressionName, impressionProperties, backdropKind, stackingBehavior, appEntryKey } = disableHapticOnOpen);
  if (!disableHapticOnOpen.disableHapticOnOpen) {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }
  const obj2 = KeyboardManagerUtils;
  const result1 = obj2.dismissGlobalKeyboard();
  const obj3 = DispatcherDefault;
  obj3.dispatch({ type: "SHOW_ACTION_SHEET", content, key, impressionName, impressionProperties, backdropKind, stackingBehavior, appEntryKey });
};
