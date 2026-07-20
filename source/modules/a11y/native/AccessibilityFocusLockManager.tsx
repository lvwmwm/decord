// Module ID: 4519
// Function ID: 39677
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4519 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("AccessibilityFocusLockManager");
let tmp4 = (arg0) => {
  class AccessibilityFocusLockManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AccessibilityFocusLockManager);
      items1 = [...items];
      obj = closure_6(AccessibilityFocusLockManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = AccessibilityFocusLockManager(closure_2[7]);
      tmp2Result._screenReaderEnabled = obj2.getIsScreenReaderEnabled();
      map = new Map();
      tmp2Result._focusLockedNativeIDGroups = map;
      tmp2Result._focusLockEnabled = false;
      tmp2Result._focusLockEnabledDelayTimeoutId = -1;
      tmp2Result._focusLockEnabledDelayTimeout = 250;
      return tmp2Result;
    }
  }
  const arg1 = AccessibilityFocusLockManager;
  callback2(AccessibilityFocusLockManager, arg0);
  let obj = {
    key: "_updateAccessibilityFocusLock",
    value() {
      let done;
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      const AccessibilityFocusLockManager = flag;
      let callback;
      clearTimeout(self._focusLockEnabledDelayTimeoutId);
      callback = undefined;
      const _focusLockedNativeIDGroups = self._focusLockedNativeIDGroups;
      const tmp2 = callback4(_focusLockedNativeIDGroups.values());
      const iter = tmp2();
      let iter2 = iter;
      let tmp3;
      if (!iter.done) {
        do {
          let value = iter2.value;
          closure_1 = value;
          let iter3 = tmp2();
          iter2 = iter3;
          tmp3 = value;
          done = iter3.done;
        } while (!done);
      }
      if (null != tmp3) {
        if (self._screenReaderEnabled) {
          const _setTimeout = setTimeout;
          self._focusLockEnabledDelayTimeoutId = setTimeout(() => {
            const obj = flag(closure_2[8]);
            if (obj.isAndroid()) {
              _undefined(closure_2[9]).enableFocusLock(_undefined, flag);
              const obj2 = _undefined(closure_2[9]);
            } else {
              const DCDAccessibilityManager = obj.DCDAccessibilityManager;
              DCDAccessibilityManager.enableFocusLock(_undefined, flag);
            }
          }, self._focusLockEnabledDelayTimeout);
          self._focusLockEnabled = true;
        }
      }
      if (self._focusLockEnabled) {
        const obj = AccessibilityFocusLockManager(closure_2[8]);
        if (obj.isAndroid()) {
          callback(closure_2[9]).disableFocusLock();
          const obj2 = callback(closure_2[9]);
        } else {
          const DCDAccessibilityManager = obj.DCDAccessibilityManager;
          DCDAccessibilityManager.disableFocusLock();
        }
        self._focusLockEnabled = false;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "_initialize",
    value() {
      const AccessibilityFocusLockManager = this;
      this._screenReaderEnabledListener = AccessibilityFocusLockManager(closure_2[7]).addScreenReaderEnabledListener((_screenReaderEnabled) => {
        self._screenReaderEnabled = _screenReaderEnabled;
        const result = self._updateAccessibilityFocusLock();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      const _screenReaderEnabledListener = this._screenReaderEnabledListener;
      if (null != _screenReaderEnabledListener) {
        _screenReaderEnabledListener.call(self);
      }
      const _focusLockedNativeIDGroups = self._focusLockedNativeIDGroups;
      _focusLockedNativeIDGroups.clear();
      const result = self._updateAccessibilityFocusLock();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enableAccessibilityFocusLock",
    value(arr) {
      let iter5;
      const self = this;
      if (0 === arr.length) {
        closure_9.error("No target view nativeIDs to add.");
      }
      const _focusLockedNativeIDGroups = self._focusLockedNativeIDGroups;
      const tmp3 = callback4(_focusLockedNativeIDGroups.values());
      const iter = tmp3();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let tmp4 = closure_10;
          let tmp5 = closure_10(iter2.value);
          let iter3 = tmp5();
          if (!iter3.done) {
            do {
              let value = iter3.value;
              if (arr.includes(value)) {
                let tmp6 = closure_9;
                let _HermesInternal = HermesInternal;
                let errorResult1 = closure_9.error("Duplicate target view nativeID " + value + " already accessibility focus locked.");
              }
              let iter4 = tmp5();
              iter3 = iter4;
              let tmp8 = value;
            } while (!iter4.done);
          }
          iter5 = tmp3();
          iter2 = iter5;
        } while (!iter5.done);
      }
      const _focusLockedNativeIDGroups2 = self._focusLockedNativeIDGroups;
      const result = _focusLockedNativeIDGroups2.set(arr[0], arr);
      const result1 = self._updateAccessibilityFocusLock(true);
    }
  };
  items[4] = {
    key: "disableAccessibilityFocusLock",
    value(arg0) {
      const self = this;
      if (0 === arg0.length) {
        closure_9.error("No target view nativeIDs to remove.");
      }
      const _focusLockedNativeIDGroups = self._focusLockedNativeIDGroups;
      if (!_focusLockedNativeIDGroups.has(arg0[0])) {
        const _HermesInternal = HermesInternal;
        closure_9.error("No target view nativeID " + arg0[0] + " accessibility focus locked.");
      }
      const _focusLockedNativeIDGroups2 = self._focusLockedNativeIDGroups;
      _focusLockedNativeIDGroups2.delete(arg0[0]);
      const result = self._updateAccessibilityFocusLock();
    }
  };
  return callback(AccessibilityFocusLockManager, items);
}(importDefault(dependencyMap[10]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/a11y/native/AccessibilityFocusLockManager.tsx");

export default tmp4;
