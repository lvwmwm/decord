// Module ID: 1454
// Function ID: 16959
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: addKeyboardTypeChangedListener, addKeyboardWillOpenChangedListener, setKeyboardType

// Module 1454 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const Storage = require(dependencyMap[3]).Storage;
  let num = 253;
  const value = Storage.get(closure_6, 253);
  if (null != value) {
    num = value;
  }
  if (arg1 === require(dependencyMap[4]).KeyboardTypes.SYSTEM) {
    if (0 !== arg0) {
      if (obj3.getIsAnyChatInputFocused()) {
        const _Math = Math;
        const bound = Math.max(arg0, 200);
        if (bound !== num) {
          const Storage2 = require(dependencyMap[3]).Storage;
          const result = Storage2.set(closure_6, bound);
        }
        let num3 = 0;
        if (arg2) {
          num3 = require(dependencyMap[6]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
          const obj = require(dependencyMap[6]);
        }
        return bound - num3;
      }
      const obj3 = require(dependencyMap[5]);
    }
  }
  let num5 = 0;
  if (arg2) {
    num5 = require(dependencyMap[6]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
    const obj2 = require(dependencyMap[6]);
  }
  return num - num5;
}
function getSystemKeyboardHeight(arg0) {
  let appEntryKey;
  let excludeSafeAreaInsets;
  let keyboardHeight;
  ({ keyboardHeight, excludeSafeAreaInsets, appEntryKey } = arg0);
  if (obj.isAndroid()) {
    let num = importDefault(dependencyMap[8]).getImeInsets(excludeSafeAreaInsets, appEntryKey);
    const obj3 = importDefault(dependencyMap[8]);
  } else {
    num = 0;
    if (0 !== keyboardHeight) {
      let num2 = 0;
      if (excludeSafeAreaInsets) {
        num2 = require(dependencyMap[6]).getSafeAreaInsets(appEntryKey).bottom;
        const obj2 = require(dependencyMap[6]);
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
      let tmp13 = !importDefault(dependencyMap[9])(tmp10, tmp12);
    }
    let obj2 = require(dependencyMap[7]);
    if (obj2.isAndroid()) {
      let systemKeyboardOpen = tmp2Result > 0;
    } else {
      systemKeyboardOpen = keyboardDuration.systemKeyboardOpen;
      if (null == systemKeyboardOpen) {
        systemKeyboardOpen = tmp.systemKeyboardOpen;
      }
    }
    if (tmp.keyboardContexts[closure_0(undefined, closure_2[4]).KeyboardTypes.SYSTEM].keyboardWillOpen) {
      if (null != keyboardDuration.systemKeyboardOpen) {
        obj = {};
        const merged = Object.assign(tmp.keyboardContexts);
        const obj1 = {};
        const merged1 = Object.assign(tmp.keyboardContexts[closure_0(undefined, closure_2[4]).KeyboardTypes.SYSTEM]);
        obj1["keyboardWillOpen"] = false;
        obj[require(dependencyMap[4]).KeyboardTypes.SYSTEM] = obj1;
        let tmp20 = obj;
      }
      if (tmp.keyboardDuration === keyboardDuration) {
        if (importDefault(dependencyMap[9])(tmp.keyboardContexts, tmp20)) {
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
  const require = arg0;
  const importDefault = DEFAULT_APP_ENTRY_KEY;
  require(dependencyMap[10]).batchUpdates(() => state.setState((arg0) => {
    let iter3;
    let tmp = arg0;
    if (null != closure_1) {
      const items = [closure_1];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = callback(closure_2[11]).APP_ENTRY_KEYS;
    }
    const byAppEntry = tmp.byAppEntry;
    const tmp5 = callback2(APP_ENTRY_KEYS);
    const iter = tmp5();
    let iter2 = iter;
    let tmp6 = byAppEntry;
    let tmp7 = byAppEntry;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp8 = tmp6[value];
        let tmp9 = closure_14;
        let tmp10 = closure_0;
        let tmp11 = closure_14(tmp8, closure_0, value);
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
  let obj = { customKeyboardHeight: getCustomKeyboardHeight(0, require(dependencyMap[4]).KeyboardTypes.SYSTEM, false, main), customKeyboardHeightExcludingSafeAreaInsets: getCustomKeyboardHeight(0, require(dependencyMap[4]).KeyboardTypes.SYSTEM, true, main), keyboardContexts: obj, keyboardDuration: 0, keyboardHeight: getSystemKeyboardHeight(obj2), keyboardHeightExcludingSafeAreaInsets: getSystemKeyboardHeight(obj3), systemKeyboardOpen: false, keyboardType: require(dependencyMap[4]).KeyboardTypes.SYSTEM, keyboardTypePrevious: require(dependencyMap[4]).KeyboardTypes.SYSTEM };
  obj = { [closure_0(closure_2[4]).KeyboardTypes.SYSTEM]: { keyboardWillOpen: false }, [closure_0(closure_2[4]).KeyboardTypes.EXPRESSION]: ExpressionPickerViewType.EMOJI, [closure_0(closure_2[4]).KeyboardTypes.MEDIA]: obj, [closure_0(closure_2[4]).KeyboardTypes.APP_LAUNCHER]: obj1 };
  obj = { target: MediaKeyboardTarget.CHAT };
  const obj2 = { "Null": 1715544575, "Null": 1409286699, appEntryKey: main };
  const obj3 = { "Null": "info", "Null": "/", appEntryKey: main };
  return obj;
}
const AppLauncherRouteName = require(dependencyMap[0]).AppLauncherRouteName;
const ExpressionPickerViewType = require(dependencyMap[1]).ExpressionPickerViewType;
const MediaKeyboardTarget = require(dependencyMap[2]).MediaKeyboardTarget;
let closure_6 = "customKeyboardHeight";
const set = new Set();
const set1 = new Set();
const _module = require(dependencyMap[7]);
let str = "keyboardWillShow";
if (_module.isAndroid()) {
  str = "keyboardDidShow";
}
const _module1 = require(dependencyMap[7]);
let str2 = "keyboardWillHide";
if (_module1.isAndroid()) {
  str2 = "keyboardDidHide";
}
const _module2 = require(dependencyMap[12]);
const obj = _module2.create(() => {
  let obj = {};
  obj = { main: createInitialEntryState("main"), share: createInitialEntryState("share") };
  obj.byAppEntry = obj;
  return obj;
});
const KeyboardEvents = require(dependencyMap[13]).KeyboardEvents;
KeyboardEvents.addListener(str, (keyboardDuration) => {
  const height = keyboardDuration.height;
  const result = importDefault(dependencyMap[14]).reactNativeKeyboardDidShow(height, "KeyboardUIStore");
  updateKeyboardStoreState({ keyboardHeight: height, keyboardDuration: keyboardDuration.duration, systemKeyboardOpen: true });
  const obj = importDefault(dependencyMap[14]);
  require(dependencyMap[15]).onKeyboardChanged(true);
  const item = set1.forEach((arg0) => arg0(false));
});
const KeyboardEvents2 = require(dependencyMap[13]).KeyboardEvents;
KeyboardEvents2.addListener(str2, () => {
  const result = importDefault(dependencyMap[14]).reactNativeKeyboardDidHide("KeyboardUIStore");
  updateKeyboardStoreState({});
  const obj = importDefault(dependencyMap[14]);
  require(dependencyMap[15]).onKeyboardChanged(false);
  const item = set1.forEach((arg0) => arg0(false));
});
const subscription = importDefault(dependencyMap[16]).subscribe(() => {
  updateKeyboardStoreState({});
});
const _module3 = require(dependencyMap[18]);
const result = _module3.fileFinishedImporting("modules/keyboard/native/KeyboardUIStore.native.tsx");

export default obj;
export const setKeyboardType = function setKeyboardType(keyboardParams, DEFAULT_APP_ENTRY_KEY) {
  const require = keyboardParams;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[17]).DEFAULT_APP_ENTRY_KEY;
  }
  const importDefault = DEFAULT_APP_ENTRY_KEY;
  const item = set.forEach((arg0) => arg0(arg0, DEFAULT_APP_ENTRY_KEY));
  const item1 = set1.forEach((self) => {
    let tmp = self.type === self(closure_2[4]).KeyboardTypes.SYSTEM;
    if (tmp) {
      const context = self.context;
      let keyboardWillOpen;
      if (null != context) {
        keyboardWillOpen = context.keyboardWillOpen;
      }
      tmp = true === keyboardWillOpen;
    }
    return self(tmp, DEFAULT_APP_ENTRY_KEY);
  });
  updateKeyboardStoreState({ keyboardType: keyboardParams }, DEFAULT_APP_ENTRY_KEY);
};
export const addKeyboardWillOpenChangedListener = function addKeyboardWillOpenChangedListener(arg0) {
  const require = arg0;
  set1.add(arg0);
  return () => set.delete(arg0);
};
export const addKeyboardTypeChangedListener = function addKeyboardTypeChangedListener(arg0) {
  const require = arg0;
  set.add(arg0);
  return () => set.delete(arg0);
};
