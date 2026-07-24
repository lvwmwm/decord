// Module ID: 10474
// Function ID: 80756
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10475, 636, 566, 686, 2]

// Module 10474 (_isNativeReflectConstruct)
import isUndefinedOrNull from "isUndefinedOrNull";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
function updateActivities() {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(items);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let activity = value.getActivity();
      if (null != activity) {
        let arr = items.push(activity);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  let flag = !importDefault(636)(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
let items = [require("_isNativeReflectConstruct")];
let closure_8 = [];
let tmp2 = ((Store) => {
  class FirstPartyRichPresenceStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, FirstPartyRichPresenceStore);
      obj = outer1_5(FirstPartyRichPresenceStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
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
  callback2(FirstPartyRichPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.syncWith(outer1_7, outer1_12);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getActivities",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  return callback(FirstPartyRichPresenceStore, items);
})(require("initialize").Store);
tmp2.displayName = "FirstPartyRichPresenceStore";
tmp2 = new tmp2(require("dispatcher"));
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default tmp2;
