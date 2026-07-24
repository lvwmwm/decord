// Module ID: 7090
// Function ID: 56865
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1362, 7091, 566, 686, 2]

// Module 7090 (_isNativeReflectConstruct)
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "priv";
import importDefaultResult1 from "priv";
import set from "_possibleConstructorReturn";

const require = arg1;
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
let obj = { max: 100 };
importDefaultResult = new importDefaultResult(obj);
let set = new Set();
obj = { max: 500 };
importDefaultResult1 = new importDefaultResult1(obj);
let tmp7 = ((Store) => {
  class GameAutocompleteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GameAutocompleteStore);
      obj = outer1_5(GameAutocompleteStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(GameAutocompleteStore, Store);
  let obj = {
    key: "getResults",
    value(query) {
      let peekResult;
      const result = GameAutocompleteStore(outer1_1[6]).normalizeGameAutocompleteQuery(query);
      if (null != result) {
        peekResult = outer1_7.peek(result);
      }
      return peekResult;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getClosestResults",
    value(query) {
      const result = GameAutocompleteStore(outer1_1[6]).normalizeGameAutocompleteQuery(query);
      if (null != result) {
        const peekResult = outer1_7.peek(result);
        if (null != peekResult) {
          return peekResult;
        } else {
          let diff = result.length - 1;
          if (diff >= 1) {
            const peekResult1 = outer1_7.peek(result.slice(0, diff));
            while (null == peekResult1) {
              diff = diff - 1;
            }
            return peekResult1;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldSuppressFetch",
    value(query) {
      const result = GameAutocompleteStore(outer1_1[6]).normalizeGameAutocompleteQuery(query);
      let tmp2 = null != result;
      if (tmp2) {
        let result1 = !outer1_7.has(result);
        if (result1) {
          result1 = !outer1_8.has(result);
        }
        if (result1) {
          result1 = GameAutocompleteStore(outer1_1[6]).shouldSuppressAutocompleteFetch(result, (arg0) => outer2_7.peek(arg0));
          const obj2 = GameAutocompleteStore(outer1_1[6]);
        }
        tmp2 = result1;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetching",
    value(query) {
      const result = GameAutocompleteStore(outer1_1[6]).normalizeGameAutocompleteQuery(query);
      let hasItem = null != result;
      if (hasItem) {
        hasItem = outer1_8.has(result);
      }
      return hasItem;
    }
  };
  items[4] = {
    key: "getGameById",
    value(arg0) {
      return outer1_9.peek(arg0);
    }
  };
  return callback(GameAutocompleteStore, items);
})(require("initialize").Store);
tmp7.displayName = "GameAutocompleteStore";
obj = {
  LOGOUT: function handleLogout() {
    importDefaultResult.reset();
    const set = new Set();
    importDefaultResult1.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(query) {
    set.add(query.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let done;
    let query;
    let results;
    ({ query, results } = arg0);
    set.delete(query);
    const result = importDefaultResult.set(query, results);
    const tmp3 = _createForOfIteratorHelperLoose(results);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = importDefaultResult1;
        let result1 = importDefaultResult1.set(value.id, value);
        let iter2 = tmp3();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  }
};
tmp7 = new tmp7(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default tmp7;
