// Module ID: 16583
// Function ID: 129398
// Name: _createForOfIteratorHelperLoose
// Dependencies: [686, 2]
// Exports: initialize

// Module 16583 (_createForOfIteratorHelperLoose)
import set from "set";

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
function validateInDevMode(arg0, arg1) {

}
function populateMap(actions) {
  let iter2;
  actions = actions.actions;
  if (null == actions) {
    actions = [];
  }
  let obj = actions;
  if (tmp) {
    let tmp2 = actions;
    if (!actions.includes("POST_CONNECTION_OPEN")) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(actions, 0);
      items[arraySpreadResult] = "POST_CONNECTION_OPEN";
      const sum = arraySpreadResult + 1;
      tmp2 = items;
    }
    obj = tmp2;
  }
  let tmp7 = obj;
  if (actions.loadRightBeforeConnectionOpen) {
    let tmp8 = obj;
    if (!obj.includes("CONNECTION_OPEN")) {
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(obj, 0);
      items1[arraySpreadResult] = "CONNECTION_OPEN";
      const sum1 = arraySpreadResult + 1;
      tmp8 = items1;
    }
    tmp7 = tmp8;
  }
  const tmp13 = _createForOfIteratorHelperLoose(tmp7);
  let iter = tmp13();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp14 = dependencyMap;
      if (!(value in dependencyMap)) {
        let tmp15 = dependencyMap;
        dependencyMap[value] = [];
      }
      let tmp16 = dependencyMap;
      let arr4 = dependencyMap[value];
      let arr = arr4.push(actions);
      iter2 = tmp13();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleAction(type) {
  let tmp3 = "CONNECTION_OPEN" !== type.type;
  if (tmp3) {
    tmp3 = "OVERLAY_INITIALIZE" !== type.type;
  }
  if (!tmp3) {
    let c3 = true;
  }
  if (type.type in dependencyMap) {
    const items = [];
    const tmp6 = _createForOfIteratorHelperLoose(dependencyMap[type.type]);
    let iter = tmp6();
    if (!iter.done) {
      while (true) {
        let value = iter.value;
        let tmp7 = c3;
        if (!c3) {
          if (value.neverLoadBeforeConnectionOpen) {
            let arr = items.push(value);
          }
          let iter2 = tmp6();
          iter = iter2;
          if (iter2.done) {
            break;
          }
        }
        let inlineRequireResult = value.inlineRequire();
        let initializeResult = inlineRequireResult.initialize();
      }
    }
    if (items.length > 0) {
      dependencyMap[type.type] = items;
    } else {
      type = type.type;
      delete tmp2[tmp];
    }
  }
  return false;
}
let set = new Set(["CHANNEL_SELECT", "CHANNEL_PRELOAD", "MESSAGE_CREATE"]);
let closure_2 = {};
let c3 = false;
const result = set.fileFinishedImporting("modules/app_startup/ManagerRegistryShared.tsx");

export const initialize = function initialize(obj) {
  for (const key10004 in arg0) {
    let tmp2 = key10004;
    let tmp3 = arg0[key10004];
    let tmp4 = validateInDevMode;
    let tmp5 = validateInDevMode(undefined, tmp3);
    let tmp6 = populateMap;
    let tmp7 = populateMap(tmp3);
    continue;
  }
  importDefault(686).addInterceptor(handleAction);
};
