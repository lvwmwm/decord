// Module ID: 8898
// Function ID: 70211
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 8898 (_isNativeReflectConstruct)
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
function _createForOfIteratorHelperLoose(iterable) {
  let dispatcher = iterable;
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
      dispatcher = tmp;
    }
    let c1 = 0;
    return () => {
      if (set >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        set = tmp3 + 1;
        obj.value = length[+set];
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
let items = [];
let c6 = false;
let tmp2 = ((PersistedStore) => {
  class SecureFramesPersistedStore {
    constructor() {
      self = this;
      tmp = SecureFramesPersistedStore(this, SecureFramesPersistedStore);
      obj = outer1_3(SecureFramesPersistedStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SecureFramesPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(persistentCodesEnabled) {
      let prop;
      if (null != persistentCodesEnabled) {
        prop = persistentCodesEnabled.persistentCodesEnabled;
      }
      const outer1_6 = null != prop && prop;
      let uploadedKeyVersions;
      if (null != persistentCodesEnabled) {
        uploadedKeyVersions = persistentCodesEnabled.uploadedKeyVersions;
      }
      if (null == uploadedKeyVersions) {
        uploadedKeyVersions = outer1_5;
      }
      const outer1_7 = uploadedKeyVersions;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return { persistentCodesEnabled: outer1_6, uploadedKeyVersions: outer1_7 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getPersistentCodesEnabled",
    value() {
      return outer1_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploadedKeyVersionsCached",
    value() {
      return outer1_7;
    }
  };
  return callback(SecureFramesPersistedStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "SecureFramesPersistedStore";
tmp2.persistKey = "SecureFramesPersistedStore";
tmp2 = new tmp2(require("dispatcher"), {
  SECURE_FRAMES_SETTINGS_UPDATE: function handleSecureFramesSettingsUpdate(persistentCodesEnabled) {
    persistentCodesEnabled = persistentCodesEnabled.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function handleSecureFramesUploadedKeyVersionAdd(keyVersion) {
    const items = [];
    const tmp = _createForOfIteratorHelperLoose(items);
    let iter = tmp();
    if (!iter.done) {
      const value = iter.value;
      while (value !== keyVersion.keyVersion) {
        let arr = items.push(value);
        let iter2 = tmp();
        iter = iter2;
      }
    }
    items.push(keyVersion.keyVersion);
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function handleSecureFramesUploadedKeyVersionsClear() {
    let closure_7 = items;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rtc/SecureFramesPersistedStore.tsx");

export default tmp2;
