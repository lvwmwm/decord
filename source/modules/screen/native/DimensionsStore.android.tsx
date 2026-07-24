// Module ID: 1451
// Function ID: 16941
// Name: _createForOfIteratorHelperLoose
// Dependencies: [27, 1452, 1822, 1557, 1823, 1570, 682, 621, 1558, 2]

// Module 1451 (_createForOfIteratorHelperLoose)
import { Dimensions } from "get ActivityIndicator";
import keys from "keys";
import importDefaultResult from "subscribeToKeyboardUIStore";
import importDefaultResult1 from "module_1558";

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
function computeWindowDimensions(prop, arg1, width, size, appEntryKey) {
  let height;
  let width2;
  size = prop;
  width = width.width;
  ({ width: width2, height } = size);
  let obj = require(1557) /* useSafeAreaInsets */;
  const rect = obj.getSafeAreaInsets(appEntryKey);
  let tmp = width2;
  let tmp2 = height;
  if (height === width) {
    tmp = height;
    tmp2 = width2;
  }
  const bound = Math.min(width + rect.left + rect.right, tmp);
  let num = 0;
  const sum = width.height + rect.top + rect.bottom;
  if (!arg1) {
    obj = { appEntryKey };
    num = require(1823) /* useSystemKeyboardHeight */.getSystemKeyboardHeight(obj);
    const obj2 = require(1823) /* useSystemKeyboardHeight */;
  }
  const bound1 = Math.min(sum - num, tmp2);
  width = undefined;
  if (null != size) {
    width = size.width;
  }
  if (width !== bound) {
    obj = { width: bound, height: bound1 };
    size = obj;
  }
  return size;
}
function getDimensionsStoreStateForEntry(appEntryKey, width) {
  let obj = width;
  obj = {};
  const merged = Object.assign(Dimensions.get("window"));
  const merged1 = Object.assign(require(1822) /* readWindowSizeForAppEntry */.readWindowSizeForAppEntry(appEntryKey));
  const obj3 = require(1822) /* readWindowSizeForAppEntry */;
  let size = require(1822) /* readWindowSizeForAppEntry */.readScreenSizeForAppEntry(appEntryKey);
  if (null == size) {
    size = Dimensions.get("screen");
  }
  const fontScale = obj.fontScale;
  let windowDimensions;
  if (null != obj) {
    windowDimensions = obj.windowDimensions;
  }
  let prop;
  if (null != obj) {
    prop = obj.windowDimensionsIgnoringKeyboard;
  }
  const tmp7 = computeWindowDimensions(windowDimensions, false, obj, size, appEntryKey);
  const tmp8 = computeWindowDimensions(prop, true, obj, size, appEntryKey);
  let windowDimensions1;
  if (null != obj) {
    windowDimensions1 = obj.windowDimensions;
  }
  if (windowDimensions1 === tmp7) {
    if (obj.windowDimensionsIgnoringKeyboard === tmp8) {
      return obj;
    }
  }
  obj = { fontScale, screenIsLandscape: tmp4, windowDimensions: tmp7, windowDimensionsIgnoringKeyboard: tmp8 };
}
function getDimensionsStoreState(arg0) {
  let iter3;
  let tmp = arg0;
  let obj = {};
  const tmp3 = _createForOfIteratorHelperLoose(require(1570) /* APP_ENTRY_KEYS */.APP_ENTRY_KEYS);
  const iter = tmp3();
  let iter2 = iter;
  let flag = tmp2;
  let tmp4 = tmp2;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp6;
      let tmp5 = getDimensionsStoreStateForEntry;
      if (null != tmp) {
        tmp6 = tmp.byAppEntry[value];
      }
      let tmp5Result = tmp5(value, tmp6);
      obj[value] = tmp5Result;
      let tmp8;
      if (null != tmp) {
        tmp8 = tmp.byAppEntry[value];
      }
      if (tmp8 !== tmp5Result) {
        flag = false;
      }
      iter3 = tmp3();
      iter2 = iter3;
      tmp4 = flag;
    } while (!iter3.done);
  }
  if (!tmp4) {
    obj = {};
    obj.byAppEntry = obj;
    tmp = obj;
  }
  return tmp;
}
function updateDimensionsStoreState() {
  require(682) /* batchUpdates */.batchUpdates(() => outer1_3.setState((arg0) => outer2_8(arg0)));
}
let obj = keys.create(() => getDimensionsStoreState(undefined));
const subscription = require("module_1558").subscribe(() => {
  updateDimensionsStoreState();
});
importDefaultResult(() => {
  updateDimensionsStoreState();
});
const listener = Dimensions.addEventListener("change", () => {
  updateDimensionsStoreState();
});
const result = require("readWindowSizeForAppEntry").fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default obj;
