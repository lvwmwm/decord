// Module ID: 3821
// Function ID: 31770
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3821 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function clearContent(QuickSwitcher) {
  let closure_0 = QuickSwitcher;
  if (null == QuickSwitcher) {
    let arr = arr.slice(0, -1);
  }
  arr = arr.filter((key) => key.key !== key);
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const array = new Array();
let closure_6;
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
  const obj = { content, key, impressionName, impressionProperties, backdropKind, appEntryKey: str2, zIndex: closure_6 };
  if ("replaceAll" === str) {
    const items = [obj];
    let combined = items;
  } else {
    if ("stack" === str) {
      if (tmp) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(array, 0);
        items1[arraySpreadResult] = obj;
        const sum = arraySpreadResult + 1;
        combined = items1;
      }
    }
    const substr = array.slice(0, -1);
    combined = substr.concat(obj);
  }
  const array = combined;
}
let tmp3 = (Store) => {
  class ActionSheetStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = ActionSheetStore(this, ActionSheetStore);
      items1 = [...items];
      obj = closure_3(ActionSheetStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getContent = () => {
        const atResult = closure_5.at(-1);
        let content;
        if (null != atResult) {
          content = atResult.content;
        }
        return content;
      };
      tmp2Result.getStack = () => closure_5;
      tmp2Result.isOpen = () => closure_5.length > 0;
      tmp2Result.getKey = () => {
        const atResult = closure_5.at(-1);
        let key;
        if (null != atResult) {
          key = atResult.key;
        }
        return key;
      };
      return tmp2Result;
    }
  }
  let closure_0 = ActionSheetStore;
  callback2(ActionSheetStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , ];
  obj = {
    key: "impressionName",
    get() {
      const atResult = closure_5.at(-1);
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
      const atResult = closure_5.at(-1);
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
      const atResult = closure_5.at(-1);
      let backdropKind;
      if (null != atResult) {
        backdropKind = atResult.backdropKind;
      }
      return backdropKind;
    }
  };
  return callback(ActionSheetStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "ActionSheetStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
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
    const found = array.filter((appEntryKey) => appEntryKey.appEntryKey !== appEntryKey);
    if (found.length === array.length) {
      return false;
    } else {
      const array = found;
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/action_sheet/native/ActionSheetStore.tsx");

export default tmp3;
