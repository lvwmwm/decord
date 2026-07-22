// Module ID: 8891
// Function ID: 70170
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8891 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const items = [];
let closure_6 = false;
let tmp2 = (PersistedStore) => {
  class SecureFramesPersistedStore {
    constructor() {
      self = this;
      tmp = SecureFramesPersistedStore(this, SecureFramesPersistedStore);
      obj = closure_3(SecureFramesPersistedStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = SecureFramesPersistedStore;
  callback2(SecureFramesPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(persistentCodesEnabled) {
      let prop;
      if (null != persistentCodesEnabled) {
        prop = persistentCodesEnabled.persistentCodesEnabled;
      }
      let closure_6 = null != prop && prop;
      let uploadedKeyVersions;
      if (null != persistentCodesEnabled) {
        uploadedKeyVersions = persistentCodesEnabled.uploadedKeyVersions;
      }
      if (null == uploadedKeyVersions) {
        uploadedKeyVersions = closure_5;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return { persistentCodesEnabled: closure_6, uploadedKeyVersions: closure_7 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getPersistentCodesEnabled",
    value() {
      return closure_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploadedKeyVersionsCached",
    value() {
      return closure_7;
    }
  };
  return callback(SecureFramesPersistedStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "SecureFramesPersistedStore";
tmp2.persistKey = "SecureFramesPersistedStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  SECURE_FRAMES_SETTINGS_UPDATE: function handleSecureFramesSettingsUpdate(persistentCodesEnabled) {
    let closure_6 = persistentCodesEnabled.persistentCodesEnabled;
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/SecureFramesPersistedStore.tsx");

export default tmp2;
