// Module ID: 1451
// Function ID: 16939
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1451 (_createForOfIteratorHelperLoose)
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
function computeWindowDimensions(prop, arg1, width, size, appEntryKey) {
  let height;
  let width2;
  size = prop;
  width = width.width;
  ({ width: width2, height } = size);
  let obj = require(dependencyMap[3]);
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
    num = require(dependencyMap[4]).getSystemKeyboardHeight(obj);
    const obj2 = require(dependencyMap[4]);
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
  const merged1 = Object.assign(require(dependencyMap[2]).readWindowSizeForAppEntry(appEntryKey));
  const obj3 = require(dependencyMap[2]);
  let size = require(dependencyMap[2]).readScreenSizeForAppEntry(appEntryKey);
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
  const tmp3 = _createForOfIteratorHelperLoose(require(dependencyMap[5]).APP_ENTRY_KEYS);
  const iter = tmp3();
  let iter2 = iter;
  let flag = tmp2;
  let tmp4 = tmp2;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp6;
      let tmp5 = closure_7;
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
  require(dependencyMap[6]).batchUpdates(() => state.setState((arg0) => callback(arg0)));
}
const Dimensions = require(dependencyMap[0]).Dimensions;
const _module = require(dependencyMap[7]);
const obj = _module.create(() => getDimensionsStoreState(undefined));
const importDefaultResult = importDefault(dependencyMap[1]);
const subscription = importDefault(dependencyMap[8]).subscribe(() => {
  updateDimensionsStoreState();
});
importDefaultResult(() => {
  updateDimensionsStoreState();
});
const listener = Dimensions.addEventListener("change", () => {
  updateDimensionsStoreState();
});
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default obj;
