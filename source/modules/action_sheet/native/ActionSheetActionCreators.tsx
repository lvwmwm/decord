// Module ID: 4098
// Function ID: 33945
// Name: showActionSheet
// Dependencies: [29, 31, 33, 686, 4099, 4100, 1820, 2]

// Module 4098 (showActionSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { jsx } from "jsxProd";

const require = arg1;
function showActionSheet(arg0) {
  let closure_3;
  let _objectWithoutProperties;
  let closure_7;
  let dependencyMap;
  let importDefault;
  let jsx;
  let require;
  let showActionSheet;
  ({ content: require, key: importDefault, impressionName: dependencyMap, impressionProperties: closure_3, backdropKind: _objectWithoutProperties, stackingBehavior: jsx, disableHapticOnOpen: showActionSheet, appEntryKey: closure_7 } = arg0);
  importDefault(686).wait(() => {
    if (!closure_6) {
      let obj = outer1_0(outer1_2[4]);
      const result = obj.triggerHapticFeedback(outer1_1(outer1_2[5]).IMPACT_LIGHT);
    }
    const result1 = outer1_0(outer1_2[6]).dismissGlobalKeyboard();
    const obj2 = outer1_0(outer1_2[6]);
    obj = { type: "SHOW_ACTION_SHEET", content: closure_0, key: closure_1, impressionName: closure_2, impressionProperties: closure_3, backdropKind: _objectWithoutProperties, stackingBehavior: closure_5, appEntryKey: closure_7 };
    outer1_1(outer1_2[3]).dispatch(obj);
  });
}
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
let result = require("jsxProd").fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise) {
    let closure_0 = arg1;
    let closure_1 = arg2;
    let closure_2 = arg3;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((arg0) => arg0.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((arg0) => {
      let appEntryKey;
      let backdropKind;
      let disableHapticOnOpen;
      let impressionName;
      let impressionProperties;
      const tmp = null != closure_1 ? closure_1 : {};
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = tmp);
      let obj = {};
      obj = {};
      const merged = Object.assign(outer1_4(tmp, outer1_3));
      obj.content = outer1_5(arg0, obj);
      obj.key = closure_0;
      obj.impressionName = impressionName;
      obj.impressionProperties = impressionProperties;
      obj.backdropKind = backdropKind;
      obj.stackingBehavior = closure_2;
      obj.disableHapticOnOpen = disableHapticOnOpen;
      obj.appEntryKey = appEntryKey;
      outer1_6(obj);
    });
  },
  hideActionSheet(key) {
    let obj = importDefault(686);
    obj = { type: "HIDE_ACTION_SHEET", key };
    obj.dispatch(obj);
  },
  hideAllActionSheets() {
    importDefault(686).dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    let obj = importDefault(686);
    obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(outer1_0) {
    let obj = importDefault(686);
    obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey: outer1_0 };
    obj.dispatch(obj);
  }
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export { showActionSheet };
