// Module ID: 8686
// Function ID: 68801
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 8686 (_isNativeReflectConstruct)
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
function handleReset() {
  let closure_5 = {};
}
let closure_5 = {};
let tmp2 = ((Store) => {
  class StorefrontPromotionStore {
    constructor() {
      self = this;
      tmp = StorefrontPromotionStore(this, StorefrontPromotionStore);
      obj = outer1_3(StorefrontPromotionStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(StorefrontPromotionStore, Store);
  let obj = {
    key: "getFetchState",
    value(arg0) {
      let state;
      if (null != outer1_5[arg0]) {
        state = tmp.state;
      }
      return state;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getFetchedAt",
    value(arg0) {
      let state;
      if (null != outer1_5[arg0]) {
        state = tmp.state;
      }
      if ("success" !== state) {
        let state1;
        if (null != tmp) {
          state1 = tmp.state;
        }
      }
      return outer1_5[arg0].fetchedAt;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPromotionsForApplication",
    value(arg0) {
      let state;
      if (null != outer1_5[arg0]) {
        state = tmp.state;
      }
      if ("success" === state) {
        const promotions = tmp.promotions;
        let tmp4 = null;
        if (null != promotions) {
          tmp4 = promotions;
        }
      } else {
        let state1;
        if (null != tmp) {
          state1 = tmp.state;
        }
        tmp4 = null;
      }
      return tmp4;
    }
  };
  items[2] = obj;
  return callback(StorefrontPromotionStore, items);
})(require("initialize").Store);
tmp2.displayName = "StorefrontPromotionStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: handleReset,
  STOREFRONT_PROMOTIONS_FETCH_START: function handleFetchStart(applicationIds) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = table;
        let tmp3 = table[value];
        let obj = { state: "loading" };
        let state;
        let tmp4 = table;
        if (null != tmp3) {
          state = tmp3.state;
        }
        let tmp6;
        if ("success" === state) {
          let items = [];
          let tmp7 = items;
          let num = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(tmp3.promotions, 0);
          tmp6 = items;
        }
        obj.promotions = tmp6;
        tmp4[value] = obj;
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationIds;
    let done;
    let iter4;
    let promotions;
    ({ applicationIds, promotions } = arg0);
    let obj = {};
    const timestamp = Date.now();
    const merged = Object.assign(obj);
    const tmp3 = _createForOfIteratorHelperLoose(applicationIds);
    let iter = tmp3();
    if (!iter.done) {
      do {
        obj = { state: "success", promotions: [], fetchedAt: timestamp };
        obj[iter.value] = obj;
        let iter2 = tmp3();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const tmp4 = _createForOfIteratorHelperLoose(promotions);
    let iter3 = tmp4();
    if (!iter3.done) {
      do {
        let value = iter3.value;
        let applicationId = value.applicationId;
        let tmp5 = obj[applicationId];
        let state;
        if (null != tmp5) {
          state = tmp5.state;
        }
        if ("success" === state) {
          promotions = obj[applicationId].promotions;
          let arr = promotions.push(value);
        }
        iter4 = tmp4();
        iter3 = iter4;
      } while (!iter4.done);
    }
  },
  STOREFRONT_PROMOTIONS_FETCH_FAIL: function handleFetchFail(applicationIds) {
    let done;
    const timestamp = Date.now();
    const tmp2 = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_5;
        let obj = { state: "error", fetchedAt: timestamp };
        closure_5[iter.value] = obj;
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: handleReset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/storefront/StorefrontPromotionStore.tsx");

export default tmp2;
