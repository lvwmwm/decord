// Module ID: 3802
// Function ID: 31353
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3802 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function getExistingSettings() {
  const settings = settings.settings;
  const obj = {};
  const textAndImages = settings.textAndImages;
  let value;
  if (null != textAndImages) {
    if (null != textAndImages.gifAutoPlay) {
      value = iter.value;
    }
  }
  obj.gifAutoPlay = value;
  const textAndImages2 = settings.textAndImages;
  value = undefined;
  if (null != textAndImages2) {
    if (null != textAndImages2.animateEmoji) {
      value = iter2.value;
    }
  }
  obj.animateEmoji = value;
  const textAndImages3 = settings.textAndImages;
  let value1;
  if (null != textAndImages3) {
    if (null != textAndImages3.animateStickers) {
      value1 = iter3.value;
    }
  }
  obj.animateStickers = value1;
  return obj;
}
function updateExistingSettings() {
  let closure_9 = getExistingSettings();
  return false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = {};
let closure_9 = {};
let tmp2 = (PersistedStore) => {
  class UserSettingsOverridesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, UserSettingsOverridesStore);
      obj = closure_5(UserSettingsOverridesStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UserSettingsOverridesStore;
  callback2(UserSettingsOverridesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      const self = this;
      if (null == arg0) {
        obj = {};
      }
      const items = [closure_7];
      self.syncWith(items, closure_14);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAppliedOverrideReasonKey",
    value(arg0) {
      let reasonKey;
      if (null != closure_8[arg0]) {
        reasonKey = tmp.reasonKey;
      }
      return reasonKey;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOverride",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  return callback(UserSettingsOverridesStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "UserSettingsOverridesStore";
tmp2.persistKey = "UserSettingsOverridesStore";
const items = [
  () => {
    const Storage = arg1(dependencyMap[7]).Storage;
    let obj = Storage.get("UserSettingsStoreOverrides");
    if (null == obj) {
      obj = {};
    }
    const Storage2 = arg1(dependencyMap[7]).Storage;
    Storage2.remove("UserSettingsStoreOverrides");
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp6 = tmp4;
        let tmp7 = closure_9;
        if (tmp2[tmp4] === closure_9[tmp4]) {
          continue;
        } else {
          let tmp5 = closure_8;
          delete r10[r11];
          flag = true;
          // continue
        }
        continue;
      }
    }
    return flag2;
  },
  USER_SETTINGS_OVERRIDE_APPLY: function handleApplySettingsOverride(settings) {
    const merged = Object.assign(closure_8);
    const merged1 = Object.assign(settings.settings);
    closure_8 = {};
  },
  USER_SETTINGS_OVERRIDE_CLEAR: function handleClearSettingsOverride(settings) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(settings.settings);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_8;
        delete r1[r5];
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOGOUT: function handleLogOut() {
    let closure_8 = {};
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    let closure_8 = {};
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/UserSettingsOverridesStore.tsx");

export default tmp2;
