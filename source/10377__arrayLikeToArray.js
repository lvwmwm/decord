// Module ID: 10377
// Function ID: 80025
// Name: _arrayLikeToArray
// Dependencies: []
// Exports: default

// Module 10377 (_arrayLikeToArray)
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
const _module = require(dependencyMap[0]);
obj = {};
const _module1 = require(dependencyMap[1]);
const merged = Object.assign(_module1.getSafeAreaInsets("main"));
obj.main = _module.makeMutable(obj);
const _module2 = require(dependencyMap[0]);
obj = {};
const _module3 = require(dependencyMap[1]);
const merged1 = Object.assign(_module3.getSafeAreaInsets("share"));
obj.share = _module2.makeMutable(obj);
function _loop(value) {
  const require = value;
  importDefault(dependencyMap[2])((arg0) => {
    callback(closure_2[3])(closure_3[closure_0], arg0);
  }, value);
}
const tmp4 = function _createForOfIteratorHelperLoose(APP_ENTRY_KEYS) {
  let require = APP_ENTRY_KEYS;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = APP_ENTRY_KEYS[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = APP_ENTRY_KEYS[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(APP_ENTRY_KEYS);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
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
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(APP_ENTRY_KEYS);
          const callResult = toString.call(APP_ENTRY_KEYS);
          const tmp3 = "Object" === substr && APP_ENTRY_KEYS.constructor;
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
}(require(dependencyMap[4]).APP_ENTRY_KEYS);
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
const _module4 = require(dependencyMap[6]);
const result = _module4.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  const obj = require(dependencyMap[5]);
  return obj[obj.useAppEntryKey(obj)];
};
export const getSafeAreaInsetsWorklet = () => {
  function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    return closure_3[str].get();
  }
  const obj = { safeAreaInsetsSharedValues: obj };
  getSafeAreaInsetsWorklet.__closure = obj;
  getSafeAreaInsetsWorklet.__workletHash = 5220247127549;
  getSafeAreaInsetsWorklet.__initData = closure_4;
  return getSafeAreaInsetsWorklet;
}();
