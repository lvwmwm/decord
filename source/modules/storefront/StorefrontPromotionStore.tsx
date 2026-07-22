// Module ID: 8679
// Function ID: 68761
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8679 (_isNativeReflectConstruct)
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
function handleReset() {
  let closure_5 = {};
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let tmp2 = (Store) => {
  class StorefrontPromotionStore {
    constructor() {
      self = this;
      tmp = StorefrontPromotionStore(this, StorefrontPromotionStore);
      obj = closure_3(StorefrontPromotionStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = StorefrontPromotionStore;
  callback2(StorefrontPromotionStore, Store);
  let obj = {
    key: "getFetchState",
    value(arg0) {
      let state;
      if (null != closure_5[arg0]) {
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
      if (null != closure_5[arg0]) {
        state = tmp.state;
      }
      if ("success" !== state) {
        let state1;
        if (null != tmp) {
          state1 = tmp.state;
        }
      }
      return closure_5[arg0].fetchedAt;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPromotionsForApplication",
    value(arg0) {
      let state;
      if (null != closure_5[arg0]) {
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
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "StorefrontPromotionStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: handleReset,
  STOREFRONT_PROMOTIONS_FETCH_START: function handleFetchStart(applicationIds) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_5;
        let tmp3 = closure_5[value];
        let obj = { state: "loading" };
        let state;
        let tmp4 = closure_5;
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
    const merged = Object.assign(closure_5);
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
    closure_5 = obj;
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/storefront/StorefrontPromotionStore.tsx");

export default tmp2;
