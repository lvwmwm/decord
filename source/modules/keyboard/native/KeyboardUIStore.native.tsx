// Module ID: 1454
// Function ID: 16961
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1455, 1314, 1552, 587, 1555, 1556, 1557, 477, 1569, 620, 682, 1570, 621, 1571, 1819, 1820, 1558, 1453, 2]
// Exports: addKeyboardTypeChangedListener, addKeyboardWillOpenChangedListener, setKeyboardType

// Module 1454 (_createForOfIteratorHelperLoose)
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import { MediaKeyboardTarget } from "DRAG_HANDLE";
import set from "set";
import set from "set";
import keys from "keys";
import { KeyboardEvents } from "KeyboardChatScrollView";
import { KeyboardEvents as KeyboardEvents2 } from "KeyboardChatScrollView";
import set from "DRAG_HANDLE";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getCustomKeyboardHeight(arg0, arg1, arg2, DEFAULT_APP_ENTRY_KEY) {
  const Storage = require(587) /* Storage */.Storage;
  let num = 253;
  const value = Storage.get(customKeyboardHeight, 253);
  if (null != value) {
    num = value;
  }
  if (arg1 === require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    if (0 !== arg0) {
      if (obj3.getIsAnyChatInputFocused()) {
        const _Math = Math;
        const bound = Math.max(arg0, 200);
        if (bound !== num) {
          const Storage2 = require(587) /* Storage */.Storage;
          const result = Storage2.set(customKeyboardHeight, bound);
        }
        let num3 = 0;
        if (arg2) {
          num3 = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
          const obj = require(1557) /* useSafeAreaInsets */;
        }
        return bound - num3;
      }
      obj3 = require(1556) /* setIsAnyChatInputFocused */;
    }
  }
  let num5 = 0;
  if (arg2) {
    num5 = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
    const obj2 = require(1557) /* useSafeAreaInsets */;
  }
  return num - num5;
}
function getSystemKeyboardHeight(arg0) {
  let appEntryKey;
  let excludeSafeAreaInsets;
  let keyboardHeight;
  ({ keyboardHeight, excludeSafeAreaInsets, appEntryKey } = arg0);
  if (obj.isAndroid()) {
    let num = importDefault(1569).getImeInsets(excludeSafeAreaInsets, appEntryKey);
    const obj3 = importDefault(1569);
  } else {
    num = 0;
    if (0 !== keyboardHeight) {
      let num2 = 0;
      if (excludeSafeAreaInsets) {
        num2 = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets(appEntryKey).bottom;
        const obj2 = require(1557) /* useSafeAreaInsets */;
      }
      num = keyboardHeight - num2;
    }
  }
  return num;
}
function computeEntryState(arg0, keyboardDuration, appEntryKey) {
  let tmp = arg0;
  keyboardDuration = keyboardDuration.keyboardDuration;
  if (null == keyboardDuration) {
    keyboardDuration = tmp.keyboardDuration;
  }
  let obj = {};
  let keyboardHeight = keyboardDuration.keyboardHeight;
  if (null == keyboardHeight) {
    keyboardHeight = tmp.keyboardHeight;
  }
  obj.keyboardHeight = keyboardHeight;
  obj.excludeSafeAreaInsets = false;
  obj.appEntryKey = appEntryKey;
  const tmp2Result = getSystemKeyboardHeight(obj);
  obj = {};
  let keyboardHeight2 = keyboardDuration.keyboardHeight;
  if (null == keyboardHeight2) {
    keyboardHeight2 = tmp.keyboardHeight;
  }
  obj.keyboardHeight = keyboardHeight2;
  obj.excludeSafeAreaInsets = true;
  obj.appEntryKey = appEntryKey;
  const tmp4Result = getSystemKeyboardHeight(obj);
  const keyboardType = keyboardDuration.keyboardType;
  let type;
  if (null != keyboardType) {
    type = keyboardType.type;
  }
  if (null == type) {
    type = tmp.keyboardType;
  }
  const tmp8 = getCustomKeyboardHeight(tmp2Result, type, false, appEntryKey);
  const tmp9 = getCustomKeyboardHeight(tmp2Result, type, true, appEntryKey);
  const keyboardType2 = keyboardDuration.keyboardType;
  let context;
  if (null != keyboardType2) {
    context = keyboardType2.context;
  }
  let tmp12 = tmp10;
  if (null != context) {
    tmp12 = context;
  }
  if ("object" === typeof tmp.keyboardContexts[type]) {
    if ("object" === typeof tmp12) {
      let tmp13 = !importDefault(620)(tmp10, tmp12);
    }
    let obj2 = require(477) /* set */;
    if (obj2.isAndroid()) {
      let systemKeyboardOpen = tmp2Result > 0;
    } else {
      systemKeyboardOpen = keyboardDuration.systemKeyboardOpen;
      if (null == systemKeyboardOpen) {
        systemKeyboardOpen = tmp.systemKeyboardOpen;
      }
    }
    if (tmp.keyboardContexts[require(undefined, 1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM].keyboardWillOpen) {
      if (null != keyboardDuration.systemKeyboardOpen) {
        obj = {};
        const merged = Object.assign(tmp.keyboardContexts);
        const obj1 = {};
        const merged1 = Object.assign(tmp.keyboardContexts[require(undefined, 1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM]);
        obj1["keyboardWillOpen"] = false;
        obj[require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM] = obj1;
        let tmp20 = obj;
      }
      if (tmp.keyboardDuration === keyboardDuration) {
        if (importDefault(620)(tmp.keyboardContexts, tmp20)) {
          if (tmp.keyboardHeight === tmp2Result) {
            if (tmp.keyboardHeightExcludingSafeAreaInsets === tmp4Result) {
              if (tmp.keyboardType === type) {
                if (tmp.customKeyboardHeight === tmp8) {
                  return tmp;
                }
              }
            }
          }
        }
      }
      obj2 = { keyboardContexts: tmp20, keyboardDuration, keyboardHeight: tmp2Result, keyboardHeightExcludingSafeAreaInsets: tmp4Result, systemKeyboardOpen, keyboardType: type, keyboardTypePrevious: tmp7, customKeyboardHeight: tmp8, customKeyboardHeightExcludingSafeAreaInsets: tmp9 };
      tmp = obj2;
    }
    const keyboardContexts = tmp.keyboardContexts;
    if (tmp13) {
      const obj3 = {};
      const merged2 = Object.assign(keyboardContexts);
      obj3[type] = tmp12;
      tmp20 = obj3;
    } else {
      tmp20 = keyboardContexts;
    }
  }
  tmp13 = tmp10 !== tmp12;
}
function updateKeyboardStoreState(arg0, DEFAULT_APP_ENTRY_KEY) {
  const _require = arg0;
  let closure_1 = DEFAULT_APP_ENTRY_KEY;
  _require(682).batchUpdates(() => outer1_9.setState((arg0) => {
    let iter3;
    let tmp = arg0;
    if (null != outer1_1) {
      const items = [outer1_1];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = callback(outer2_2[11]).APP_ENTRY_KEYS;
    }
    const byAppEntry = tmp.byAppEntry;
    const tmp5 = outer2_10(APP_ENTRY_KEYS);
    const iter = tmp5();
    let iter2 = iter;
    let tmp6 = byAppEntry;
    let tmp7 = byAppEntry;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp8 = tmp6[value];
        let tmp9 = outer2_14;
        let tmp10 = outer1_0;
        let tmp11 = outer2_14(tmp8, outer1_0, value);
        let tmp12 = tmp6;
        if (tmp8 !== tmp11) {
          let obj = {};
          let tmp13 = obj;
          let tmp14 = tmp6;
          let merged = Object.assign(tmp6);
          obj[value] = tmp11;
          tmp12 = obj;
        }
        iter3 = tmp5();
        tmp6 = tmp12;
        iter2 = iter3;
        tmp7 = tmp12;
      } while (!iter3.done);
    }
    if (tmp7 !== tmp.byAppEntry) {
      obj = { byAppEntry: tmp7 };
      tmp = obj;
    }
    return tmp;
  }));
}
function createInitialEntryState(main) {
  obj = { customKeyboardHeight: getCustomKeyboardHeight(0, require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM, false, main), customKeyboardHeightExcludingSafeAreaInsets: getCustomKeyboardHeight(0, require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM, true, main), keyboardContexts: obj, keyboardDuration: 0, keyboardHeight: getSystemKeyboardHeight(obj2), keyboardHeightExcludingSafeAreaInsets: getSystemKeyboardHeight(obj3), systemKeyboardOpen: false, keyboardType: require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM, keyboardTypePrevious: require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM };
  obj = { [closure_0(closure_2[4]).KeyboardTypes.SYSTEM]: { keyboardWillOpen: false }, [closure_0(closure_2[4]).KeyboardTypes.EXPRESSION]: ExpressionPickerViewType.EMOJI, [closure_0(closure_2[4]).KeyboardTypes.MEDIA]: obj, [closure_0(closure_2[4]).KeyboardTypes.APP_LAUNCHER]: obj1 };
  obj = { target: MediaKeyboardTarget.CHAT };
  obj2 = { keyboardHeight: 0, excludeSafeAreaInsets: false, appEntryKey: main };
  obj3 = { keyboardHeight: 0, excludeSafeAreaInsets: true, appEntryKey: main };
  return obj;
}
const customKeyboardHeight = "customKeyboardHeight";
let set = new Set();
const set1 = new Set();
let str = "keyboardWillShow";
if (set.isAndroid()) {
  str = "keyboardDidShow";
}
let str2 = "keyboardWillHide";
if (set.isAndroid()) {
  str2 = "keyboardDidHide";
}
let obj = keys.create(() => {
  let obj = {};
  obj = { main: createInitialEntryState("main"), share: createInitialEntryState("share") };
  obj.byAppEntry = obj;
  return obj;
});
KeyboardEvents.addListener(str, (keyboardDuration) => {
  const height = keyboardDuration.height;
  const result = importDefault(1819).reactNativeKeyboardDidShow(height, "KeyboardUIStore");
  updateKeyboardStoreState({ keyboardHeight: height, keyboardDuration: keyboardDuration.duration, systemKeyboardOpen: true });
  const obj = importDefault(1819);
  require(1820) /* dismissGlobalKeyboard */.onKeyboardChanged(true);
  const item = set1.forEach((arg0) => arg0(false));
});
KeyboardEvents2.addListener(str2, () => {
  const result = importDefault(1819).reactNativeKeyboardDidHide("KeyboardUIStore");
  updateKeyboardStoreState({ keyboardHeight: 0, systemKeyboardOpen: false });
  const obj = importDefault(1819);
  require(1820) /* dismissGlobalKeyboard */.onKeyboardChanged(false);
  const item = set1.forEach((arg0) => arg0(false));
});
const subscription = require("module_1558").subscribe(() => {
  updateKeyboardStoreState({});
});
let result = set.fileFinishedImporting("modules/keyboard/native/KeyboardUIStore.native.tsx");

export default obj;
export const setKeyboardType = function setKeyboardType(keyboardParams, DEFAULT_APP_ENTRY_KEY) {
  const _require = keyboardParams;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1453).DEFAULT_APP_ENTRY_KEY;
  }
  const item = set.forEach((arg0) => arg0(closure_0, DEFAULT_APP_ENTRY_KEY));
  const item1 = set1.forEach((arg0) => {
    let tmp = keyboardParams.type === keyboardParams(outer1_2[4]).KeyboardTypes.SYSTEM;
    if (tmp) {
      const context = keyboardParams.context;
      let keyboardWillOpen;
      if (null != context) {
        keyboardWillOpen = context.keyboardWillOpen;
      }
      tmp = true === keyboardWillOpen;
    }
    return arg0(tmp, DEFAULT_APP_ENTRY_KEY);
  });
  updateKeyboardStoreState({ keyboardType: keyboardParams }, DEFAULT_APP_ENTRY_KEY);
};
export const addKeyboardWillOpenChangedListener = function addKeyboardWillOpenChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => outer1_8.delete(closure_0);
};
export const addKeyboardTypeChangedListener = function addKeyboardTypeChangedListener(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => outer1_7.delete(closure_0);
};
