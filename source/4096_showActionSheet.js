// Module ID: 4096
// Function ID: 33928
// Name: showActionSheet
// Dependencies: []

// Module 4096 (showActionSheet)
function showActionSheet(arg0) {
  ({ content: closure_0, key: closure_1, impressionName: closure_2, impressionProperties: closure_3, backdropKind: closure_4, stackingBehavior: closure_5, disableHapticOnOpen: closure_6, appEntryKey: closure_7 } = arg0);
  importDefault(dependencyMap[3]).wait(() => {
    if (!closure_6) {
      let obj = callback(closure_2[4]);
      const result = obj.triggerHapticFeedback(callback2(closure_2[5]).IMPACT_LIGHT);
    }
    if (obj2.isAndroid()) {
      const result1 = callback(closure_2[7]).dismissGlobalKeyboard();
      const obj3 = callback(closure_2[7]);
    }
    const obj2 = callback(closure_2[6]);
    obj = { type: "SHOW_ACTION_SHEET", content: callback, key: callback2, impressionName: closure_2, impressionProperties: closure_3, backdropKind: closure_4, stackingBehavior: closure_5, appEntryKey: closure_7 };
    callback2(closure_2[3]).dispatch(obj);
  });
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise) {
    const importDefault = arg2;
    const dependencyMap = arg3;
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
      const tmp = null != arg2 ? arg2 : {};
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = tmp);
      let obj = {};
      obj = {};
      const merged = Object.assign(callback(tmp, closure_3));
      obj.content = callback2(arg0, obj);
      obj.key = arg1;
      obj.impressionName = impressionName;
      obj.impressionProperties = impressionProperties;
      obj.backdropKind = backdropKind;
      obj.stackingBehavior = arg3;
      obj.disableHapticOnOpen = disableHapticOnOpen;
      obj.appEntryKey = appEntryKey;
      callback3(obj);
    });
  },
  hideActionSheet(key) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "HIDE_ACTION_SHEET", key };
    obj.dispatch(obj);
  },
  hideAllActionSheets() {
    importDefault(dependencyMap[3]).dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(closure_0) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey: closure_0 };
    obj.dispatch(obj);
  }
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export { showActionSheet };
