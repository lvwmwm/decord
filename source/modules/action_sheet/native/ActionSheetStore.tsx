// Module ID: 3823
// Function ID: 31776
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 3823 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function clearContent(QuickSwitcher) {
  let dispatcher = QuickSwitcher;
  if (null == QuickSwitcher) {
    array = array.slice(0, -1);
  }
  array = array.filter((key) => key.key !== dispatcher);
}
let array = new Array();
let c6;
function setContent(stackingBehavior) {
  let backdropKind;
  let content;
  let impressionName;
  let impressionProperties;
  let key;
  let str = stackingBehavior.stackingBehavior;
  ({ content, key, impressionName, impressionProperties, backdropKind } = stackingBehavior);
  if (str === undefined) {
    str = "replaceTopSheet";
  }
  let str2 = stackingBehavior.appEntryKey;
  if (str2 === undefined) {
    str2 = "main";
  }
  const obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex: c6 };
  if ("replaceAll" === str) {
    const items = [obj];
    let combined = items;
  } else {
    if ("stack" === str) {
      if (tmp) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(combined, 0);
        items1[arraySpreadResult] = obj;
        const sum = arraySpreadResult + 1;
        combined = items1;
      }
    }
    const substr = combined.slice(0, -1);
    combined = substr.concat(obj);
  }
}
let tmp3 = ((Store) => {
  class ActionSheetStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = ActionSheetStore(this, ActionSheetStore);
      items1 = [...items];
      obj = outer1_3(ActionSheetStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getContent = () => {
        const atResult = outer2_5.at(-1);
        let content;
        if (null != atResult) {
          content = atResult.content;
        }
        return content;
      };
      tmp2Result.getStack = () => outer2_5;
      tmp2Result.isOpen = () => outer2_5.length > 0;
      tmp2Result.getKey = () => {
        const atResult = outer2_5.at(-1);
        let key;
        if (null != atResult) {
          key = atResult.key;
        }
        return key;
      };
      return tmp2Result;
    }
  }
  callback2(ActionSheetStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  let items = [obj, , , ];
  obj = {
    key: "impressionName",
    get() {
      const atResult = outer1_5.at(-1);
      let impressionName;
      if (null != atResult) {
        impressionName = atResult.impressionName;
      }
      return impressionName;
    }
  };
  items[1] = obj;
  obj = {
    key: "impressionProperties",
    get() {
      const atResult = outer1_5.at(-1);
      let impressionProperties;
      if (null != atResult) {
        impressionProperties = atResult.impressionProperties;
      }
      return impressionProperties;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "backdropKind",
    get() {
      const atResult = outer1_5.at(-1);
      let backdropKind;
      if (null != atResult) {
        backdropKind = atResult.backdropKind;
      }
      return backdropKind;
    }
  };
  return callback(ActionSheetStore, items);
})(require("initialize").Store);
tmp3.displayName = "ActionSheetStore";
tmp3 = new tmp3(require("dispatcher"), {
  SHOW_ACTION_SHEET: function handleShowActionSheet(stackingBehavior) {
    setContent(stackingBehavior);
  },
  SHOW_ACTION_SHEET_QUICK_SWITCHER: function handleShowActionSheetQuickSwitcher(arg0) {
    const merged = Object.assign(arg0);
    setContent({ key: "QuickSwitcher" });
  },
  HIDE_ACTION_SHEET: function handleHideActionSheet(key) {
    clearContent(key.key);
  },
  HIDE_ALL_ACTION_SHEETS: function handleHideAllActionSheets() {
    let closure_5 = [];
  },
  HIDE_ACTION_SHEET_QUICK_SWITCHER: function handleHideActionSheetQuickSwitcher() {
    clearContent("QuickSwitcher");
  },
  SET_ACTION_SHEET_Z_INDEX: function handleSetActionSheetZIndex(zIndex) {
    zIndex = zIndex.zIndex;
  },
  RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY: function handleResetActionSheetsForAppEntryKey(appEntryKey) {
    appEntryKey = appEntryKey.appEntryKey;
    found = found.filter((appEntryKey) => appEntryKey.appEntryKey !== appEntryKey);
    if (found.length === found.length) {
      return false;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/action_sheet/native/ActionSheetStore.tsx");

export default tmp3;
