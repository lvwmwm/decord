// Module ID: 10423
// Function ID: 80314
// Name: _arrayLikeToArray
// Dependencies: [3991, 1557, 10424, 10051, 1570, 1453, 2]
// Exports: default

// Module 10423 (_arrayLikeToArray)
import module_3991 from "module_3991";
import useSafeAreaInsets from "useSafeAreaInsets";
import module_3991 from "module_3991";
import useSafeAreaInsets from "useSafeAreaInsets";

let done;
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
let obj = {};
obj = {};
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
obj.main = module_3991.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
obj.share = module_3991.makeMutable(obj);
function _loop(value) {
  let closure_0 = value;
  importDefault(10424)((arg0) => {
    outer1_1(outer1_2[3])(outer1_3[closure_0], arg0);
  }, value);
}
const tmp4 = (function _createForOfIteratorHelperLoose(APP_ENTRY_KEYS) {
  let closure_0 = APP_ENTRY_KEYS;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = APP_ENTRY_KEYS[Symbol.iterator];
  }
  if (!iterable) {
    iterable = APP_ENTRY_KEYS[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(APP_ENTRY_KEYS);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(APP_ENTRY_KEYS)) {
      let tmp2;
      if (APP_ENTRY_KEYS) {
        if ("string" === typeof APP_ENTRY_KEYS) {
          tmp2 = _arrayLikeToArray(APP_ENTRY_KEYS, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(APP_ENTRY_KEYS).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = APP_ENTRY_KEYS.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(APP_ENTRY_KEYS, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(APP_ENTRY_KEYS);
          const callResult = toString.call(APP_ENTRY_KEYS);
          tmp3 = "Object" === substr && APP_ENTRY_KEYS.constructor;
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
      if (closure_1 >= APP_ENTRY_KEYS.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = APP_ENTRY_KEYS[+closure_1];
      }
      return obj;
    };
  }
})(require("APP_ENTRY_KEYS").APP_ENTRY_KEYS);
let iter = tmp4();
if (!iter.done) {
  do {
    let _loopResult = _loop(iter.value);
    let iter2 = tmp4();
    iter = iter2;
    done = iter2.done;
  } while (!done);
}
let closure_4 = { code: "function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){const{safeAreaInsetsSharedValues}=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();}" };
const tmp6 = (() => {
  export function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    return outer1_3[str].get();
  }
  obj = { safeAreaInsetsSharedValues: obj };
  getSafeAreaInsetsWorklet.__closure = obj;
  getSafeAreaInsetsWorklet.__workletHash = 5220247127549;
  getSafeAreaInsetsWorklet.__initData = closure_4;
  return getSafeAreaInsetsWorklet;
})();
const result = require("subscribeToSafeAreaInsets").fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  const obj = require(1453) /* context */;
  return obj[obj.useAppEntryKey(obj)];
};
