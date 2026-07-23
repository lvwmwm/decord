// Module ID: 3804
// Function ID: 31360
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 566, 587, 686, 2]

// Module 3804 (_isNativeReflectConstruct)
import initialize from "initialize";
import Storage from "Storage";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getExistingSettings() {
  settings = settings.settings;
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
let closure_8 = {};
let closure_9 = {};
let tmp2 = ((PersistedStore) => {
  class UserSettingsOverridesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, UserSettingsOverridesStore);
      obj = outer1_5(UserSettingsOverridesStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UserSettingsOverridesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      const self = this;
      if (null == arg0) {
        obj = {};
      }
      const outer1_8 = obj;
      const items = [outer1_7];
      self.syncWith(items, outer1_14);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAppliedOverrideReasonKey",
    value(arg0) {
      let reasonKey;
      if (null != outer1_8[arg0]) {
        reasonKey = tmp.reasonKey;
      }
      return reasonKey;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOverride",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  return callback(UserSettingsOverridesStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "UserSettingsOverridesStore";
tmp2.persistKey = "UserSettingsOverridesStore";
let items = [
  () => {
    const Storage = require(587) /* Storage */.Storage;
    let obj = Storage.get("UserSettingsStoreOverrides");
    if (null == obj) {
      obj = {};
    }
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("UserSettingsStoreOverrides");
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(require("dispatcher"), {
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp6;
        let tmp9 = table;
        if (tmp4[tmp6] === table[tmp6]) {
          continue;
        } else {
          let tmp7 = closure_8;
          delete tmp2[tmp3];
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  USER_SETTINGS_OVERRIDE_APPLY: function handleApplySettingsOverride(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  USER_SETTINGS_OVERRIDE_CLEAR: function handleClearSettingsOverride(settings) {
    let done;
    const tmp3 = _createForOfIteratorHelperLoose(settings.settings);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = closure_8;
        delete tmp[tmp2];
        let iter2 = tmp3();
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/UserSettingsOverridesStore.tsx");

export default tmp2;
